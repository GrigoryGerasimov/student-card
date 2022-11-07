import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import App from "./app/App.jsx";
import { withStore } from "./app/components/common/form/hoc/withStore";

const AppWithStore = withStore(App);

ReactDOM.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <AppWithStore/>
        </React.StrictMode>
    </BrowserRouter>
);
