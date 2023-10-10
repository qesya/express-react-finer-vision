import { ChangeEvent, useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";

import theme from "./config/theme";

import { postUser, validateInput } from "./utils";
import { genderOptions } from "./constants";

import { AccordionWrapper, RowWrapper, Wrapper } from "./components/atoms";
import { Accordion, Select, TextInput, Textarea } from "./components/molecules";

export interface FormState {
  [key: string]: string;
}

const App = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormState>({
    firstName: "",
    surname: "",
    email: "",
    telephoneNumber: "",
    gender: "",
    date: "",
    month: "",
    year: "",
    comments: "",
  });

  const onSelectedStep = useCallback(
    (stepSelected: number) => () => {
      if (step !== stepSelected && step !== -1) {
        setStep(stepSelected);
      } else {
        setStep(step === -1 ? stepSelected : -1);
      }
    },
    [step]
  );

  const changeHandler = useCallback(
    (key: keyof FormState) =>
      (
        e:
          | ChangeEvent<HTMLInputElement>
          | ChangeEvent<HTMLTextAreaElement>
          | ChangeEvent<HTMLSelectElement>
      ) => {
        setForm((prev) => ({ ...prev, [key]: e.target.value }));
      },
    []
  );

  const onNext = useCallback(
    (submitStep: number) => () => {
      const key = submitStep.toString();
      const handlers = {
        1: () => {
          if (validateInput(form, ["firstName", "surname", "email"])) {
            setStep(2);
          }
        },
        2: () => {
          if (
            validateInput(form, [
              "firstName",
              "surname",
              "email",
              "telephoneNumber",
              "gender",
              "date",
              "month",
              "year",
            ])
          ) {
            setStep(3);
          }
        },
        3: async () => {
          if (
            validateInput(form, [
              "firstName",
              "surname",
              "email",
              "telephoneNumber",
              "gender",
              "date",
              "month",
              "year",
              "comments",
            ])
          ) {
            await postUser(form);
          }
        },
      }[key];

      if (handlers) {
        return handlers();
      }
    },
    [form]
  );

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <AccordionWrapper>
          <Accordion
            isOpen={step === 1}
            title="Step 1: Your details"
            onClick={onSelectedStep(1)}
            onSubmit={onNext(1)}
          >
            <RowWrapper>
              <TextInput
                label="First name"
                value={form.firstName}
                onChange={changeHandler("firstName")}
                width="250px"
              />
              <TextInput
                label="Surname"
                value={form.surname}
                onChange={changeHandler("surname")}
                width="250px"
              />
            </RowWrapper>
            <TextInput
              label="Email Address"
              value={form.email}
              onChange={changeHandler("email")}
              width="250px"
            />
          </Accordion>
          <Accordion
            isOpen={step === 2}
            title="Step 2: More comments"
            onClick={onSelectedStep(2)}
            onSubmit={onNext(2)}
          >
            <RowWrapper>
              <TextInput
                label="Telephone number"
                value={form.telephoneNumber}
                onChange={changeHandler("telephoneNumber")}
                width="250px"
              />
              <Select
                label="Gender"
                value={form.gender}
                onChange={changeHandler("gender")}
                width="250px"
                options={genderOptions}
              />
            </RowWrapper>
            <RowWrapper>
              <TextInput
                label="Date of birth"
                value={form.date}
                onChange={changeHandler("date")}
                width="70px"
              />
              <TextInput
                label="."
                value={form.month}
                onChange={changeHandler("month")}
                width="70px"
              />
              <TextInput
                label="."
                value={form.year}
                onChange={changeHandler("year")}
                width="70px"
              />
            </RowWrapper>
          </Accordion>
          <Accordion
            isOpen={step === 3}
            title="Step 3: Final comments"
            onClick={onSelectedStep(3)}
            onSubmit={onNext(3)}
          >
            <Textarea
              label="Comments"
              value={form.comments}
              onChange={changeHandler("comments")}
              width="500px"
            />
          </Accordion>
        </AccordionWrapper>
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
