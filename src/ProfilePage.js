import React from 'react';
import { Helmet } from 'react-helmet';
import { Route } from 'react-router-dom';
import Wallpaper from './Wallpaper';
import Menu from './Menu';
import ProfileInfo from './ProfileInfo';
import MainBlock from './TweetList';
import FollowSuggestions from './FollowSuggestions';
import Trends from './Trends';
import Copyright from './Copyright';
import FamiliarFollowers from './FamiliarFollowers';
import Media from './Media';
import Miscellaneous from './Miscellaneous';
import users from './Users';

const ProfilePage = ({ match }) => {
  const { username } = match.params;
  const userData = users.find(user => user.username === username);

  return (
    <div>
      <Helmet>
        <title>
          {`${userData.name} (@${userData.username})`}
        </title>
      </Helmet>
      <Wallpaper />
      <Menu username={username} />
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ProfileInfo userData={userData} />
            <FamiliarFollowers username={username} />
            <Media username={username} />
          </div>
          <div className="col-lg-6">
            <MainBlock userData={userData} />
            <Route exact path={`/${username}/following`} component={Miscellaneous} />
            <Route exact path={`/${username}/followers`} component={Miscellaneous} />
            <Route exact path={`/${username}/likes`} component={Miscellaneous} />
            <Route exact path={`/${username}/lists`} component={Miscellaneous} />
          </div>
          <div className="col-lg-3">
            <FollowSuggestions userData={userData} />
            <Trends />
            <Copyright />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
