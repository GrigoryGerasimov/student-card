import React, { useContext } from "react";
import { getNewID } from "../../utils/getNewID";
import { createStore, getStoreInitialState } from "../store";
import PropTypes from "prop-types";

const generatedId = getNewID();

const StoreContext = React.createContext();

export const useStore = () => useContext(StoreContext);

export const StoreProvider = ({ children }) => {
    const initialState = JSON.parse(localStorage.getItem("user")) ?? getStoreInitialState(generatedId);
    const store = createStore(initialState);

    return (
        <StoreContext.Provider value={{ store }}>
            {children}
        </StoreContext.Provider>);
};

StoreProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
