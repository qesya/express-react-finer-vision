import { FormState } from "../App";

export const postUser = async (input: FormState) => {
  try {
    const { date, month, year, ...validInput } = input;
    const transformInput = {
      ...validInput,
      dateOfBirth: `${year}-${month}-${date}`,
    };
    const raw = await fetch("http://localhost:4000/v1/user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(transformInput),
    });
    const res = await raw.json();

    if (res.errors) {
      const errorAlert = ["Api validation error with: \n"];
      res.errors.map((x: { msg?: string }) => {
        if (x?.msg) {
          errorAlert.push(`\n - ${x.msg}`);
        }
        return x;
      });

      if (errorAlert.length > 1) {
        return alert(errorAlert.join(""));
      }
    } else {
      alert(res?.message || res?.error);
    }
  } catch (e: unknown) {
    console.log(e);
  }
};
