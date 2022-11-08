import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "../store/hooks/useSelector.jsx";
import { getUserId } from "../store/store.js";
import DataNotFound from "../components/common/DataNotFound.jsx";
import ContainerWrapper from "../components/common/ContainerWrapper.jsx";

const Main = () => {
    const getUserData = useSelector();
    const userData = getUserData();
    const userId = useSelector(getUserId());

    return userData?.firstName ? <Navigate to={`card/${userId}`} /> : (
        <ContainerWrapper title="Карточка студента">
            <DataNotFound
                text="Данные отсутствуют"
                path={`card/${userId}/create`}
                label="Добавить"
            />
        </ContainerWrapper>
    );
};

export default Main;
