import React from "react";
import { Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FormLayout, FormField, NumberField, AutoFocusedField } from "../common/form";
import ModalWindow from "../common/ModalWindow.jsx";
import ContainerWrapper from "../common/ContainerWrapper.jsx";
import { useSelector } from "../../store/hooks/useSelector.jsx";
import { getUserId } from "../../store/store.js";

const CreateStudentCardPage = () => {
    const userId = useSelector(getUserId());

    return (
        <ContainerWrapper title="Карточка студента">
            {!localStorage.user ? (
                <FormLayout userId={userId}>
                    <AutoFocusedField
                        label="Имя"
                        type="text"
                        id="firstName"
                        name="firstName"
                    />
                    <FormField
                        label="Фамилия"
                        id="lastName"
                        name="lastName"
                    />
                    <NumberField
                        label="Год рождения"
                        type="number"
                        id="yearOfBirth"
                        name="yearOfBirth"
                    />
                    <FormField
                        label="Телефон"
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="+7-XXX-XXX-XX-XX"
                    />
                    <FormField
                        label="Портфолио"
                        id="portfolio"
                        name="portfolio"
                    />
                    <FormField
                        label="Файл"
                        type="file"
                        id="file"
                        name="file"
                    />
                    <Button type="submit" className="mt-4 m-1">
                            Создать
                    </Button>
                    <ModalWindow
                        type="modal"
                        text="Карточка успешно создана!"
                    />
                </FormLayout>
            ) : <Navigate to={`/card/${userId}`} replace={true} />
            }
        </ContainerWrapper>
    );
};

export default CreateStudentCardPage;
