import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import { Helmet } from 'react-helmet';
import ProfilePage from './ProfilePage';
import Header from './Header';
import Miscellaneous from './Miscellanious';

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
        <Redirect from="/" to="/everyinteract" />
        <Route exact path="/everyinteract" component={ProfilePage} />
        <Route path="/hashtag/" component={Miscellaneous} />
        <Route path="/search/" component={Miscellaneous} />
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
      </div>
    </BrowserRouter>
  </div>
);

export default App;
