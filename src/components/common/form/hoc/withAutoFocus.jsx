import React from "react";

export const withAutoFocus = Component => props => {
    return <Component {...props} autoFocus />;
};
