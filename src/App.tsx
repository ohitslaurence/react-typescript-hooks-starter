import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Page } from './components/library/Page';
import { Button } from './components/library/Button';
import { setTheme } from './utils/theme';
import './App.css';

function App() {
  useEffect(() => {
    setTheme('default');
  });

  return (
    <div className="App">
      <header>
        <Page banner={true}>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link text-6xl"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button>Test</Button>
        </Page>
      </header>
    </div>
  );
}

export default App;
