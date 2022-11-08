import React from "react";
import { DispatchProvider } from "../../../../store/hooks/useDispatch.jsx";
import { SelectorProvider } from "../../../../store/hooks/useSelector.jsx";
import { StoreProvider } from "../../../../store/hooks/useStore";
import PropTypes from "prop-types";

export const withReduxHooks = (children) => {
    return (
        <StoreProvider>
            <DispatchProvider>
                <SelectorProvider>
                    {children}
                </SelectorProvider>
            </DispatchProvider>
        </StoreProvider>
    );
};

withReduxHooks.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
