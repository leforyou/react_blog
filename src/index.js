import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import RooterCenter from './Rooter';
import "./index.css";
import App from "./components/App";

import "./style/reset.scss";
import "./style/main.scss";


import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <Fragment>
        <BrowserRouter>
            <Fragment>
                <App></App>
                <RooterCenter></RooterCenter>
            </Fragment>
        </BrowserRouter>
    </Fragment>,
    document.getElementById("root")
);