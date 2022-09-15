export const validatorConfig = {
    firstName: {
        isRequired: {
            message: "Данное поле обязательно для заполнения"
        }
    },
    lastName: {
        isRequired: {
            message: "Данное поле обязательно для заполнения"
        }
    },
    yearOfBirth: {
        isRequired: {
            message: "Данное поле обязательно для заполнения"
        },
        isValid: {
            message: "Введите корректный год рождения",
            param: 4
        }
    },
    phone: {
        isRequired: {
            message: "Данное поле обязательно для заполнения"
        },
        isPhone: {
            message: "Введите корректный телефонный номер"
        }
    },
    portfolio: {
        isRequired: {
            message: "Данное поле обязательно для заполнения"
        },
        isURL: {
            message: "Портфолио должно являться ссылкой"
        }
    },
    file: {
        isRequired: {
            message: "Загрузите свою студенческую биографию"
        }
    }
};
