import React from "react";
import { Redirect } from "react-router-dom";
import { getNewID } from "../utils/getNewID.js";
import DataNotFound from "../components/common/DataNotFound.jsx";
import ContainerWrapper from "../components/common/ContainerWrapper.jsx";

const Main = () => {
    const generatedId = getNewID();
    const userData = localStorage.user ? JSON.parse(localStorage.getItem("user")) : {};
    return userData?.id ? <Redirect to={`/card/${userData.id}`} /> : (
        <ContainerWrapper title="Карточка студента">
            <DataNotFound
                text="Данные отсутствуют"
                path={`/card/${generatedId}/create`}
                label="Добавить"
            />
        </ContainerWrapper>
    );
};

export default Main;
