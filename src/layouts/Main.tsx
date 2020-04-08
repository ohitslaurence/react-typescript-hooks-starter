import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

import { SideBar, RouteMenuItem } from '../components/library';

interface MainProps extends RouteComponentProps {
  children?: React.ReactNode;
}

/**
 * Layout component that can be used to wrap authenticated components
 *
 * Any providers that should not be exposed to public routes can go in here
 */
export const Main: React.FunctionComponent<MainProps> = ({ children }: MainProps) => {
  const { t } = useTranslation();

  return (
    <div className="main-layout">
      <SideBar>
        <RouteMenuItem
          name={t('components.dashboard')}
          path="/"
          icon="window-maximize"
          iconColor="primary"
        />
        <RouteMenuItem
          name={t('components.components')}
          path="/components"
          icon="puzzle-piece"
          iconColor="positive"
        />
      </SideBar>
      <div id="page-window" className="bg-sec-background fixed inset-0 overflow-auto">
        {children}
      </div>
    </div>
  );
};
