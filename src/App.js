import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { Helmet } from "react-helmet";

import ProfilePage from "./ProfilePage";

const App = props => (
  <div>
    <Helmet>
      <title>Twitter</title>
    </Helmet>
    <BrowserRouter>
      <div>
        <Redirect from="/" to="/everyinteract" />
        <Route path="/everyinteract" component={ProfilePage} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
