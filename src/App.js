import React, { Component } from "react";
import "./Fonts/fonts.css";
import Header from "./Header";
import Wallpaper from "./Wallpaper";
import Menu from "./Menu";
import ProfileInfo from "./ProfileInfo";
import TweetList from "./TweetList";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Wallpaper />
        <Menu />
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <ProfileInfo />
            </div>
            <div className="col-lg-6">
              <TweetList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
