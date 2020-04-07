import React from 'react';
import { RouteComponentProps } from '@reach/router';

import { Page } from '../components/library/Page';

export const RegisterPage: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return (
    <Page banner className="flex justify-center">
      <div className="bg-white w-full max-w-md shadow-md rounded py-10">
        <div className="h-24 flex justify-center"></div>
      </div>
    </Page>
  );
};
