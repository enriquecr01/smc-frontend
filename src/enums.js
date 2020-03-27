// Object.freeze() hace que un array no pueda ser cambiado nunca mas

const DaysEnum = {0: "Monday", 1: "Tuesday", 2: "Wednesday", 3: "Thursday", 4: "Friday", 5: "Saturday"};
export const days = Object.freeze(DaysEnum);
