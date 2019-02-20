import React, { Component } from "react";
//import logo from "./../../logo.svg";
import "./style.scss";

//import Header from "./../Header"; //导入方式二：  import Header from "../Header"    <Header />


class App extends Component {
  /**注释：可多行
   * 
   * 页面的内容由rooter导入了。如果每个页面没有公共的内容，这个App组件可以不要
   * 
   */

  render() {
    return (
      <div className="App">
        {/* <Header /> 标签注释, 用 {} 包围*/}
      </div>
    );
  }
}

export default App;
