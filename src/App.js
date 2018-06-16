import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { Helmet } from "react-helmet";

import EveryInteract from "./EveryInteract";

const App = props => (
  <div>
    <Helmet>
      <title>Twitter</title>
    </Helmet>
    <BrowserRouter>
      <div>
        <Route render={() => <Redirect to="/everyinteract" />} />
        <Route path="/everyinteract" component={EveryInteract} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
