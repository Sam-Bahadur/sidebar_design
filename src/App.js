import style from "./App.module.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./component/Home/Home";
import Sidebar from "./component/Sidebar/Sidebar";
import React, { Component } from "react";
import MobileNavbar from "./component/MobileNavbar/MobileNavbar";
import Footer from "./component/Footer/Footer";
import AboutMe from "./component/Aboutme/AboutMe";
import Gallary from "./component/Gallary/Gallary";
import Publication from "./component/Publication/Publication";
import Check from "./component/MobileNavbar/Check";
import Videos from "./component/Videos/Videos";

export default class App extends Component {
  state = {
    ismobileview: false,
  };

  componentDidMount() {
    // window.addEventListener('resize', checkwidth=>{
    return window.innerWidth < 769
      ? this.setState({ ismobileview: true })
      : null;
  }

  componentWillUnmount() {
    window.removeEventListener("resize");
  }

  render() {
    return (
      <BrowserRouter>
        {/* <Upbtn /> */}
        <div className={style.body}>
          <div className={this.state.ismobileview ? null : style.sidebar}>
            {this.state.ismobileview ? <Check /> : <Sidebar />}
          </div>
          <div className={style.body_content}>
            <Switch>
              <Route path="/aboutme" component={AboutMe} />
              <Route exact path="/gallery" exact component={Gallary} />
              <Route exact path="/publication" exact component={Publication} />
              <Route exact path="/videos" exact component={Videos} />
              <Route exact path="/" exact component={Home} />
            </Switch>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}
