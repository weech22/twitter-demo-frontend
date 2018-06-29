import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Helmet } from 'react-helmet';
import ProfilePage from './ProfilePage';
import Header from './Header';
import Miscellaneous from './Miscellaneous';

const App = () => (
  <div>
    <Helmet>
      <title>
        {'Twitter'}
      </title>
    </Helmet>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Redirect exact from="/" to="/EveryInteract" />
          <Route path="/search/" component={Miscellaneous} />
          <Route path="/hashtag/" component={Miscellaneous} />
          <Route exact path="/moments" component={Miscellaneous} />
          <Route exact path="/notifications" component={Miscellaneous} />
          <Route exact path="/messages" component={Miscellaneous} />
          <Route exact path="/view_all" component={Miscellaneous} />
          <Route exact path="/who_to_follow/import" component={Miscellaneous} />
          <Route exact path="/about" component={Miscellaneous} />
          <Route exact path="/help" component={Miscellaneous} />
          <Route exact path="/terms" component={Miscellaneous} />
          <Route exact path="/privacy" component={Miscellaneous} />
          <Route exact path="/cookies" component={Miscellaneous} />
          <Route exact path="/ads" component={Miscellaneous} />
          <Route path="/:username" component={ProfilePage} />
        </Switch>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
