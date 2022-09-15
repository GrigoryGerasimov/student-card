import React from "react";
import { Switch, Route } from "react-router-dom";
import Main from "./layout/Main.jsx";
import { StudentCardPage, CreateStudentCardPage, EditStudentCardPage } from "./components/page";
import PageNotFound from "./components/PageNotFound.jsx";

const App = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/card/:userId?/edit" component={EditStudentCardPage} />
            <Route path="/card/:userId?/create" component={CreateStudentCardPage} />
            <Route path="/card/:userId?" component={StudentCardPage} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    );
};

export default App;
