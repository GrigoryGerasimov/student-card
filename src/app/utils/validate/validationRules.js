export const validationRules = {
    isRequired: data => data.trim(),
    isURL: data => /https?:\/\/\S+\.\S+/g.test(data),
    isValid: (data, param) => data.length === param && (data >= 1900 && data < new Date().getFullYear()),
    isPhone: data => /^\+7-\d{3}-\d{3}-\d{2}-\d{2}$/g.test(data)
};
