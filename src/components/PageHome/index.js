import React, { Component } from "react";
//import logo from "./../../logo.svg";
import "./style.scss";
//BrowserRouter,HashRouter,Link,MemoryRouter,NavLink,Prompt,Redirect,Route,Router,StaticRouter,Switch,generatePath,matchPath,withRouter
import {
  NavLink
} from 'react-router-dom';

import Header from "./../Header"; //导入方式二：  import Header from "../Header"    <Header />


class App extends Component {
  /**注释：可多行
   * 
   * 
   */

  render() {
    return (
      <div className="page-home">
        <Header />
        <ul>
          <li><NavLink activeClassName="selected" to="/">李白</NavLink></li>
          <li><NavLink activeClassName="selected" to="/PoetDuFu">杜甫</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default App;
