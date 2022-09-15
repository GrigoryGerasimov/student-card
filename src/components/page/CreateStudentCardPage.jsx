import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { FormLayout, FormField, NumberField, AutoFocusedField } from "../common/form";
import ModalWindow from "../common/ModalWindow.jsx";
import ContainerWrapper from "../common/ContainerWrapper.jsx";

const CreateStudentCardPage = () => {
    const { userId } = useParams();
    const history = useHistory();
    const userData = localStorage.user ? JSON.parse(localStorage.getItem("user")) : {
        id: userId,
        firstName: "",
        lastName: "",
        yearOfBirth: "",
        phone: "",
        portfolio: "",
        file: ""
    };
    return (
        <ContainerWrapper title="Карточка студента">
            {!localStorage.user ? (
                <FormLayout userId={userId} userData={userData}>
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
            ) : history.replace(`/card/${userId}`)
            }
        </ContainerWrapper>
    );
};

export default CreateStudentCardPage;
