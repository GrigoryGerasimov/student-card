import React from "react";
import { Main, StudentCard, Card } from "./layouts";
import { StudentCardPage, CreateStudentCardPage, EditStudentCardPage } from "./components/page";
import PageNotFound from "./components/PageNotFound.jsx";

export const routes = [
    { path: "", element: <Main/> },
    {
        path: "card",
        element: <Card/>,
        children: [
            { path: "", element: <PageNotFound/> },
            {
                path: ":userId",
                element: <StudentCard/>,
                children: [
                    { path: "", element: <StudentCardPage/> },
                    { path: "edit", element: <EditStudentCardPage/> },
                    { path: "create", element: <CreateStudentCardPage/> },
                    { path: "*", element: <PageNotFound/> }
                ]
            },
            { path: "*", element: <PageNotFound/> }
        ]
    },
    { path: "*", element: <PageNotFound/> }
];
