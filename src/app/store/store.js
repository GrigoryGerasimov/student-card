import { reducer } from "./reducer.js";

const configureStore = reducer => initialState => {
    let state = initialState;
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

export const getStoreInitialState = id => ({
    id,
    firstName: "",
    lastName: "",
    yearOfBirth: "",
    phone: "",
    portfolio: "",
    file: ""
});

export const createStore = configureStore(reducer);

export const getUserId = () => state => state ? state.id : null;
