import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

import { ButtonsExample } from '../components/examples/ButtonsExample';
import { FormsExample } from '../components/examples/FormsExample';
import { ToastsExample } from '../components/examples/ToastsExample';
import { Page, Card, DocumentTitle } from '../components/library';

export const ComponentsPage: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { t } = useTranslation();

  return (
    <Page banner>
      <DocumentTitle pageTitle={t('components.components')} />

      <div className="mb-6">
        <Card header={t('components.buttons')}>
          <ButtonsExample />
        </Card>
      </div>

      <div className="mb-6">
        <Card header={t('components.forms')}>
          <FormsExample />
        </Card>
      </div>

      <div className="mb-6">
        <Card header={t('components.toast_notifications')}>
          <ToastsExample />
        </Card>
      </div>
    </Page>
  );
};
