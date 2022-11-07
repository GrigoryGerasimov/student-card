import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import PropTypes from "prop-types";

const ModalWindow = ({ label, text, show, onClose }) => {
    return (
        <Modal show={show} onHide={onClose} backdrop="static" keyboard={false}>
            <Modal.Body>
                <h5 className="p-5 my-5 mx-auto">{text}</h5>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onClose}>
                    {label}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalWindow;

ModalWindow.defaultProps = {
    label: "Подтвердить"
};

ModalWindow.propTypes = {
    label: PropTypes.string,
    text: PropTypes.string,
    show: PropTypes.bool,
    onClose: PropTypes.func
};
