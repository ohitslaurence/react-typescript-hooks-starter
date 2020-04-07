import React, { useEffect } from 'react';
import { Router } from '@reach/router';
import { Main } from './layouts/Main';
import { Auth } from './layouts/Auth';
import { HomePage } from './pages/HomePage';
import { ComponentsPage } from './pages/ComponentsPage';

import { setTheme } from './utils/theme';
import './App.css';

function App() {
  useEffect(() => {
    setTheme('default');
  });

  return (
    <React.Fragment>
      <Router>
        <Main path="/">
          <HomePage default path="/" />
          <ComponentsPage path="/components" />
        </Main>
        <Auth path="/auth">
          <div></div>
        </Auth>
      </Router>
    </React.Fragment>
  );
}

export default App;
