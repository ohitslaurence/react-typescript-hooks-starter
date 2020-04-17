import React from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'store/theme/context';

import { DocumentTitle } from './components/library';
import { Main } from './layouts/Main';
import { Auth } from './layouts/Auth';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ComponentsPage } from './pages/ComponentsPage';

import 'notyf/notyf.min.css';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <DocumentTitle />

      <ThemeProvider>
        <Router>
          <Main path="/">
            <HomePage default path="/" />
            <ComponentsPage path="/components" />
          </Main>
          <Auth path="/auth">
            <LoginPage path="/login" />
            <RegisterPage path="/register" />
          </Auth>
        </Router>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
