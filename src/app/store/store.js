import { reducer } from "./reducer.js";

const createStore = reducer => initialState => {
    let state = initialState || {};
    const listeners = [];

    const getState = () => {
        return state;
    };

    const subscribe = listener => {
        listeners.push(listener);
    };

    const dispatch = action => {
        state = reducer(state, action);
        for (const listener of listeners) listener();
    };

    return { getState, subscribe, dispatch };
};

export const getStoreInitialState = id => localStorage.user ? JSON.parse(localStorage.getItem("user")) : {
    id,
    firstName: "",
    lastName: "",
    yearOfBirth: "",
    phone: "",
    portfolio: "",
    file: ""
};

export const composeStore = createStore(reducer);
