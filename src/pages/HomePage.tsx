import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { Page } from '../components/library/Page';

export const HomePage: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return (
    <Page>
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
    </Page>
  );
};
