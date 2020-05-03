import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import MainPage from './domains/main/Page'
import LoginPage from 'views/domains/logins/LoginPage/Page'


import contextRoutes from '../lib/context/routes'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={contextRoutes.PATH_LOGIN} component={LoginPage} />
        <Route path={contextRoutes.PATH_ROOT} component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
