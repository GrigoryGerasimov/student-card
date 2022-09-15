import { getAgeFormat } from "./getAgeFormat.js";

export const getAge = (data) => {
    const age = (Date.now() - new Date(data).getTime()) / 1000 / 60 / 60 / 24 / 365;
    const ageInt = parseInt(age.toString());
    return `${ageInt} ${getAgeFormat(ageInt)}`;
};
