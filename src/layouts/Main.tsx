import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface MainProps extends RouteComponentProps {
  children?: React.ReactNode;
}

/**
 * Layout component that can be used to wrap authenticated components
 *
 * Any providers that should not be exposed to public routes can go in here
 */
export const Main: React.FunctionComponent<MainProps> = ({ children }: MainProps) => {
  return <div className="main-layout">{children}</div>;
};
