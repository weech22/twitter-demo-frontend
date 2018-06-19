import React from "react";
import { Helmet } from "react-helmet";
import Header from "./Header";
import Wallpaper from "./Wallpaper";
import Menu from "./Menu";
import ProfileInfo from "./ProfileInfo";
import TweetList from "./TweetList";
import FollowSuggestions from "./FollowSuggestions";
import Trends from "./Trends";
import Copyright from "./Copyright";
import FamiliarFollowers from "./FamiliarFollowers";

const ProfilePage = () => (
  <div>
    <Helmet>
      <title>Every Interaction (@EveryInteract)</title>
      <meta
        name="description"
        content="Последние твиты от Every Interaction (@EveryInteract). A user-experience design studio in London. We specialise in making the complex simple, the confusing intuitive and the perplexing obvious. London, UK"
      />
    </Helmet>
    <Header />
    <Wallpaper />
    <Menu />
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <ProfileInfo />
          <FamiliarFollowers />
        </div>
        <div className="col-lg-6">
          <TweetList />
        </div>
        <div className="col-lg-3">
          <FollowSuggestions />
          <Trends />
          <Copyright />
        </div>
      </div>
    </div>
  </div>
);

export default ProfilePage;
