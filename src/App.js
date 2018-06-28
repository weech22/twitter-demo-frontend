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
        <Route path="/everyinteract" component={ProfilePage} />
        <Route path="/about" component={Miscellaneous} />
        <Route path="/help" component={Miscellaneous} />
        <Route path="/terms" component={Miscellaneous} />
        <Route path="/privacy" component={Miscellaneous} />
        <Route path="/cookies" component={Miscellaneous} />
        <Route path="/ads" component={Miscellaneous} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
