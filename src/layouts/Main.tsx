import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { SideBar } from '../components/library';

interface MainProps extends RouteComponentProps {
  children?: React.ReactNode;
}

/**
 * Layout component that can be used to wrap authenticated components
 *
 * Any providers that should not be exposed to public routes can go in here
 */
export const Main: React.FunctionComponent<MainProps> = ({ children }: MainProps) => {
  return (
    <div className="main-layout">
      <SideBar />
      <div id="page-window" className="bg-sec-background fixed inset-0 overflow-auto">
        {children}
      </div>
    </div>
  );
};
