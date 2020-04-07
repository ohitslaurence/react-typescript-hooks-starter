import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface AuthProps extends RouteComponentProps {
  children?: React.ReactNode;
}

/**
 * Layout component that can be used to wrap unauthenticated components
 */
export const Auth: React.FunctionComponent<AuthProps> = ({ children }: AuthProps) => {
  return <div className="auth-layout">{children}</div>;
};
