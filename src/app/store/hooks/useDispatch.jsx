import React, { useContext } from "react";
import { useStore } from "./useStore.jsx";
import PropTypes from "prop-types";

const DispatchContext = React.createContext();

export const useDispatch = () => useContext(DispatchContext);

export const DispatchProvider = ({ children }) => {
    const { store } = useStore();
    const { dispatch } = store;
    return <DispatchContext.Provider value={{ dispatch }}>{children}</DispatchContext.Provider>;
};

DispatchProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
