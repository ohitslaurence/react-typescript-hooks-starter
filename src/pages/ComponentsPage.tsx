import React from 'react';
import { RouteComponentProps } from '@reach/router';

import styles from '../assets/css/pages/ComponentsPage.module.css';
import { Page, Button, Card } from '../components/library';

export const ComponentsPage: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  return (
    <Page>
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
            <Button color="warning">Warning</Button>
            <Button outline color="warning">
              Warning Outline
            </Button>
          </div>
        </Card>
      </div>

      <div className="mb-6">
        <Card header="Forms">
          <Button>Test</Button>
        </Card>
      </div>
    </Page>
  );
};
