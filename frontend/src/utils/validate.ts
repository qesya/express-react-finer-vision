export const validateInput = (formObject: object = {}, keys: string[] = []) => {
  const alertLabel = ["Following input required: \n"];
  Object.entries(formObject).map(([key, val]) => {
    if (keys.includes(key) && (!val || val === "")) {
      const spaceCase = key.replace(/([a-z])([A-Z])/g, "$1 $2");
      const label =
        spaceCase.charAt(0).toUpperCase() + spaceCase.slice(1).toLowerCase();
      alertLabel.push(`\n - ${label}`);
    }
    return [key, val];
  });

  if (alertLabel.length > 1) {
    alert(alertLabel.join(""));
    return false;
  }

  return true;
};
