import { validationRules } from "./validationRules.js";

export const validate = (data, config) => {
    const errors = {};
    for (const name in data) {
        for (const configName in config[name]) {
            const { message, param } = config[name][configName];
            const validator = validationRules[configName];
            if (!validator(data[name], param)) {
                errors[name] = message;
                break;
            }
        }
    }
    return errors;
};
