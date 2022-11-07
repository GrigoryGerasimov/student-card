import React from "react";
import { Link } from "react-router-dom";
import ContainerWrapper from "./common/ContainerWrapper.jsx";

const PageNotFound = () => {
    return (
        <ContainerWrapper>
            <p>Мы сожалеем, но запрашиваемая Вами страница не найдена</p>
            <Link to="/">
                <button className="btn btn-primary mt-4">
                    Вернуться на главную
                </button>
            </Link>
        </ContainerWrapper>
    );
};

export default PageNotFound;
