import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { validate } from "../../../utils/validate/validate.js";
import { validatorConfig } from "../../page/validatorConfig.js";

const FormLayout = ({ userId, userData, children }) => {
    const fileRef = useRef();
    const history = useHistory();
    const [data, setData] = useState(userData || {});
    const [errors, setErrors] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        data?.id ? history.push(`/card/${data.id}`) : history.replace(`/card/${userId}`);
    };
    const handleShow = () => setShow(true);
    const handleChange = ({ target }) => {
        const { name, value } = target;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const modalChild = children.find(item => item.props.type === "modal");
    const isModalChild = !!~children.indexOf(modalChild);
    const handleSubmit = evt => {
        evt.preventDefault();
        const errors = validate(data, validatorConfig);
        if (Object.keys(errors).length) return false;
        localStorage.setItem("user", JSON.stringify(data));
        if (!isModalChild) data?.id ? history.push(`/card/${data.id}`) : history.replace(`/card/${userId}`);
    };
    useEffect(() => {
        setErrors(validate(data, validatorConfig));
    }, [data]);
    const isValid = !Object.keys(errors).length;
    const handleClick = () => history.push(`/card/${userId}`);
    const handleMoveWithEnter = evt => {
        if (evt.keyCode === 13) {
            evt.preventDefault();
            const { form } = evt.target;
            const inputIndex = Array.prototype.indexOf.bind(form)(evt.target);
            form.elements[inputIndex + 1].focus();
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            {React.Children.map(children, child => {
                let config = {};
                switch (child.props.type) {
                    case "file": {
                        config = {
                            ...child,
                            type: child.props.type,
                            fileRef,
                            error: errors[child.props.name],
                            onChange: handleChange,
                            onKeyDown: handleMoveWithEnter
                        };
                        break;
                    }
                    case "button": {
                        config = {
                            ...child.props,
                            onClick: handleClick
                        };
                        break;
                    }
                    case "submit": {
                        config = isModalChild ? {
                            ...child.props,
                            variant: "primary",
                            onClick: handleShow,
                            disabled: !isValid
                        } : {
                            ...child.props,
                            disabled: !isValid
                        };
                        break;
                    }
                    case "modal": {
                        config = {
                            ...child.props,
                            show,
                            onClose: handleClose
                        };
                        break;
                    }
                    default: {
                        config = {
                            ...child,
                            type: child.props.type,
                            value: data[child.props.name],
                            error: errors[child.props.name],
                            onChange: handleChange,
                            onKeyDown: handleMoveWithEnter
                        };
                        break;
                    }
                }
                return React.cloneElement(child, config);
            })}
        </form>
    );
};

export default FormLayout;

FormLayout.propTypes = {
    userId: PropTypes.string,
    userData: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};
