import React, { Component, Fragment } from "react";
//var  router = require('react-router-dom');//CommonJS
//import { Router, Route } from 'react-router-dom';//ES6
//import * as routerDom from 'react-router-dom';
//console.log(router,routerDom)

//BrowserRouter,HashRouter,Link,MemoryRouter,NavLink,Prompt,Redirect,Route,Router,StaticRouter,Switch,generatePath,matchPath,withRouter
import {
    //NavLink,
    Route,
    Switch
} from 'react-router-dom';



import PageHome from '../components/PageHome';


import PageNotFound from '../components/PageNotFound';






class RooterCenter extends Component {


    render() {
        return (
            <Fragment>
                {/* Link、NavLink负责路由选择，Route负责视图展示。 */}
                <Switch>
                    <Route exact path={"/"} component={PageHome}></Route>

                    <Route component={PageNotFound} />
                </Switch>
            </Fragment>
        );
    }
}

export default RooterCenter;