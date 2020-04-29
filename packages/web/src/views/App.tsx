import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './domains/main/Page'
import LoginPage from 'views/domains/logins/LoginPage'


import contextRoutes from '../lib/context/routes'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={contextRoutes.PATH_ROOT} component={MainPage} />
        <Route exact path={contextRoutes.PATH_LOGIN} component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
