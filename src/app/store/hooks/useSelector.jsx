import React, { useContext } from "react";
import { useStore } from "./useStore.jsx";
import PropTypes from "prop-types";

const SelectorContext = React.createContext();

export const useSelector = selectorFn => selectorFn ? selectorFn(useContext(SelectorContext)()) : useContext(SelectorContext);

export const SelectorProvider = ({ children }) => {
    const { store } = useStore();
    const { getState } = store;
    return <SelectorContext.Provider value={getState}>{children}</SelectorContext.Provider>;
};

SelectorProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
