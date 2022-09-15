import React from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import DataNotFound from "../common/DataNotFound.jsx";
import { FormLayout, FormField, NumberField, AutoFocusedField } from "../common/form";
import ModalWindow from "../common/ModalWindow.jsx";
import ContainerWrapper from "../common/ContainerWrapper.jsx";

const EditStudentCardPage = () => {
    const { userId } = useParams();
    const userData = JSON.parse(localStorage.getItem("user"));
    return (
        <ContainerWrapper title="Изменить данные">
            {userData.id === userId ? (
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
                    <button
                        type="button"
                        className="btn btn-secondary mt-4 m-1"
                    >
                            Назад
                    </button>
                    <Button type="submit" className="mt-4 m-1">
                        Обновить
                    </Button>
                    <ModalWindow
                        type="modal"
                        text="Данные успешно изменены!"
                    />
                </FormLayout>
            ) : (
                <DataNotFound
                    text="Извините, но запрашиваемые данные по студенту отсутствуют"
                    path="/"
                    label="Вернуться на главную"
                />
            )
            }
        </ContainerWrapper>
    );
};

export default EditStudentCardPage;
