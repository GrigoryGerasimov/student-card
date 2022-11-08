import React from "react";
import PropTypes from "prop-types";

const ContainerWrapper = ({ title, children }) => {
    return (
        <div className="container shadow p-5 mt-5 mx-auto">
            <div className="row">
                <h3>{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default ContainerWrapper;

ContainerWrapper.propTypes = {
    title: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};
