import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const DataNotFound = ({ text, path, label }) => {
    return (
        <>
            <p>{text}</p>
            <Link to={path}>
                <button className="btn btn-primary mt-4">
                    {label}
                </button>
            </Link>
        </>
    );
};

export default DataNotFound;

DataNotFound.propTypes = {
    text: PropTypes.string,
    path: PropTypes.string,
    label: PropTypes.string
};
