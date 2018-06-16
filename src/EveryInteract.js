import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Wallpaper from "./Wallpaper";
import Menu from "./Menu";
import ProfileInfo from "./ProfileInfo";
import TweetList from "./TweetList";

const EveryInteract = () => (
  <div>
    <Helmet>
      <title>Every Interaction (@EveryInteract)</title>
    </Helmet>
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

export default EveryInteract;
