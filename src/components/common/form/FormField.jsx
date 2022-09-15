import React from "react";
import PropTypes from "prop-types";

const FormField = ({ label, type, id, name, value, onChange, onKeyDown, error, max, min, step, autoFocus, fileRef, placeholder }) => {
    const getInputClassName = () => `form-control ${error ? "is-invalid" : ""}`;
    return (
        <div className="form-group">
            <label htmlFor={id} className="form-label">{label}</label>{" "}
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onKeyDown={onKeyDown}
                className={getInputClassName()}
                min={min}
                max={max}
                step={step}
                autoFocus={autoFocus}
                ref={fileRef}
                placeholder={placeholder}
            />
            {error && <div className="invalid-feedback">{error}</div>}
        </div>
    );
};

export default FormField;

FormField.defaultProps = {
    type: "text"
};

FormField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    error: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    step: PropTypes.number,
    autoFocus: PropTypes.bool,
    fileRef: PropTypes.any,
    placeholder: PropTypes.string
};
