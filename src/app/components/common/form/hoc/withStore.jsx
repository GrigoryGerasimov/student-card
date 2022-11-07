import React, { useContext } from "react";
import { composeStore, getStoreInitialState } from "../../../../store/store";
import { getNewID } from "../../../../utils/getNewID";
import PropTypes from "prop-types";

const StoreContext = React.createContext();

export const useStore = () => useContext(StoreContext);

const StoreProvider = ({ children }) => {
    const generatedId = getNewID();
    const store = composeStore(getStoreInitialState(generatedId));
    return <StoreContext.Provider value={{ store }}>{children}</StoreContext.Provider>;
};

export const withStore = Component => props => {
    return (
        <StoreProvider>
            <Component {...props}/>
        </StoreProvider>
    );
};

StoreProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
