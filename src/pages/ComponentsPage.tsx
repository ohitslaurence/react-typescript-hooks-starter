import React from 'react';
import { RouteComponentProps } from '@reach/router';

import styles from '../assets/css/pages/ComponentsPage.module.css';
import { Page, Button, Card, DocumentTitle, useToast } from '../components/library';

export const ComponentsPage: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { notifyError, notifySuccess, notifyWarning } = useToast();
  return (
    <Page>
      <DocumentTitle pageTitle="Components" />

      <div className="mb-6">
        <Card header="Buttons">
          <div className={styles.buttonSeperator}>
            <Button>Standard Button</Button>
            <Button size="small">Small Button</Button>
            <Button outline>Outline Button</Button>
            <Button color="secondary">Secondary</Button>
            <Button outline color="secondary">
              Secondary Outline
            </Button>
            <Button color="tertiary">Tertiary</Button>
            <Button outline color="tertiary">
              Tertiary Outline
            </Button>
            <Button color="info">Info</Button>
            <Button outline color="info">
              Info Outline
            </Button>
            <Button color="positive">Positive</Button>
            <Button outline color="positive">
              Positive Outline
            </Button>
            <Button color="negative">Negative</Button>
            <Button outline color="negative">
              Negative Outline
            </Button>
            <Button color="warning">Warning</Button>
            <Button outline color="warning">
              Warning Outline
            </Button>
          </div>

          <div className={styles.buttonSeperator}>
            <Button icon="trash-alt">Icon Button</Button>
            <Button outline icon="trash-alt">
              Icon Outline
            </Button>
            <Button icon="paper-plane"></Button>
            <Button outline icon="paper-plane"></Button>
          </div>
        </Card>
      </div>

      <div className="mb-6">
        <Card header="Forms">
          <Button>Test</Button>
        </Card>
      </div>

      <div className="mb-6">
        <Card header="Toast Notifications">
          <div className={styles.buttonSeperator}>
            <Button
              color="positive"
              onClick={() => notifySuccess('The actions was performed successfully')}
            >
              Success Toast
            </Button>
            <Button
              color="negative"
              onClick={() => notifyError('There was an error completing the action')}
            >
              Error Toast
            </Button>
            <Button
              color="warning"
              onClick={() => notifyWarning('There could be an error if you proceed')}
            >
              Warning Toast
            </Button>
          </div>
        </Card>
      </div>
    </Page>
  );
};
