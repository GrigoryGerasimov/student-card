import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ContainerWrapper from "../common/ContainerWrapper.jsx";
import DataNotFound from "../common/DataNotFound.jsx";
import { getAge } from "../../utils/getAge/getAge.js";
import { useDispatch } from "../../store/hooks/useDispatch.jsx";
import { useSelector } from "../../store/hooks/useSelector.jsx";
import { getUserId } from "../../store/store.js";
import { actions } from "../../store/actions.js";

const StudentCardPage = () => {
    const navigate = useNavigate();
    const { dispatch } = useDispatch();
    const getStudentData = useSelector();
    const studentData = getStudentData();
    const userId = useSelector(getUserId());
    const paramsId = useParams().userId;

    useEffect(() => {
        dispatch(actions.getCard());
    }, []);

    const handleDelete = () => {
        if (localStorage.user) dispatch(actions.deleteCard());
        navigate("/", { replace: true });
    };
    return (
        <ContainerWrapper title="Карточка студента">
            {studentData.firstName && userId === paramsId ? (
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
