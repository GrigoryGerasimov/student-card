export const getAgeFormat = age => {
    const ageToStr = String(age);
    const lastChar = Number(ageToStr[ageToStr.length - 1]);
    return lastChar === 1 ? "год" : lastChar >= 2 && lastChar <= 4 ? "года" : "лет";
};
