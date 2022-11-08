import { actionTypes } from "./actions.js";

const { GET_CARD, CREATE_CARD, CHANGE_CARD, DELETE_CARD } = actionTypes;

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case GET_CARD: {
            return JSON.parse(localStorage.getItem("user"));
        }
        case CREATE_CARD: {
            localStorage.setItem("user", JSON.stringify(payload));
            return payload;
        }
        case CHANGE_CARD: {
            const newState = { ...state };
            for (const field in newState) {
                for (const property in payload) {
                    if (field === property && newState[field] !== payload[property]) {
                        newState[field] = payload[property];
                        break;
                    }
                }
            }
            return newState;
        }
        case DELETE_CARD: {
            localStorage.removeItem("user");
            break;
        }
        default: {
            return state;
        }
    }
};
