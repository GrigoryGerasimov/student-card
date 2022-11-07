import React from "react";

export const withNumberRange = Component => props => {
    const startValue = 1900;
    const endValue = 2500;
    const step = 1;
    return <Component {...props} min={startValue} max={endValue} step={step}/>;
};
