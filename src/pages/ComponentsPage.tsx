import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { Page, Button } from '../components/library';

export const ComponentsPage: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return (
    <Page>
      <Button>Test</Button>
    </Page>
  );
};
