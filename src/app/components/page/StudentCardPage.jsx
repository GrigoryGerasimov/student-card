import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ContainerWrapper from "../common/ContainerWrapper.jsx";
import DataNotFound from "../common/DataNotFound.jsx";
import { getAge } from "../../utils/getAge/getAge.js";

const StudentCardPage = () => {
    const navigate = useNavigate();
    const { userId } = useParams();
    const studentData = JSON.parse((localStorage.getItem("user")));
    const handleDelete = () => {
        if (localStorage.user) localStorage.removeItem("user");
        navigate("/", { replace: true });
    };
    return (
        <ContainerWrapper title="Карточка студента">
            {studentData && studentData.id === userId ? (
                <>
                    <div>ID студента: {studentData.id.includes("id") ? studentData.id.slice(studentData.id.indexOf("id") + "id".length) : studentData.id}</div>
                    <div>Имя: {studentData.firstName}</div>
                    <div>Фамилия: {studentData.lastName}</div>
                    <div>Год рождения: {studentData.yearOfBirth} ({getAge(studentData.yearOfBirth)})</div>
                    <div>Контакт: {studentData.phone}</div>
                    <div>Портфолио:{" "}
                        <a href={studentData.portfolio}>
                            {studentData.portfolio}
                        </a>
                    </div>
                    <div>Файл: {studentData.file}</div>
                    <div>
                        <Link to="edit">
                            <button type="button" className="btn btn-primary mt-4 m-1">Редактировать</button>
                        </Link>
                        <button
                            type="button"
                            className="btn btn-danger mt-4 m-1"
                            onClick={handleDelete}
                        >
                            Удалить
                        </button>
                    </div>
                </>
            ) : (
                <DataNotFound
                    text="Извините, но запрашиваемые данные по студенту отсутствуют"
                    path="/"
                    label="Вернуться на главную"
                />
            )}
        </ContainerWrapper>
    );
};

export default StudentCardPage;
