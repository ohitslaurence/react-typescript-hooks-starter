import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';

import styles from '../assets/css/pages/ComponentsPage.module.css';
import { Page, Button, Card, DocumentTitle, useToast } from '../components/library';

export const ComponentsPage: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { t } = useTranslation();
  const { notifyError, notifySuccess, notifyWarning } = useToast();
  return (
    <Page banner>
      <DocumentTitle pageTitle={t('components.components')} />

      <div className="mb-6">
        <Card header={t('components.buttons')}>
          <div className={styles.buttonSeperator}>
            <Button>{t('components.standard_button')}</Button>
            <Button size="small">{t('components.small_button')}</Button>
            <Button outline>{t('components.outline_button')}</Button>
            <Button color="secondary">{t('components.secondary')}</Button>
            <Button outline color="secondary">
              {t('components.secondary_outline')}
            </Button>
            <Button color="tertiary">{t('components.tertiary')}</Button>
            <Button outline color="tertiary">
              {t('components.tertiary_outline')}
            </Button>
            <Button color="info">{t('components.info')}</Button>
            <Button outline color="info">
              {t('components.info_outline')}
            </Button>
            <Button color="positive">{t('components.positive')}</Button>
            <Button outline color="positive">
              {t('components.positive_outline')}
            </Button>
            <Button color="negative">{t('components.negative')}</Button>
            <Button outline color="negative">
              {t('components.negative_outline')}
            </Button>
            <Button color="warning">{t('components.warning')}</Button>
            <Button outline color="warning">
              {t('components.warning_outline')}
            </Button>
          </div>

          <div className={styles.buttonSeperator}>
            <Button icon="trash-alt">{t('components.icon_button')}</Button>
            <Button outline icon="trash-alt">
              {t('components.icon_outline')}
            </Button>
            <Button icon="paper-plane"></Button>
            <Button outline icon="paper-plane"></Button>
          </div>
        </Card>
      </div>

      <div className="mb-6">
        <Card header={t('components.forms')}>
          <Button>Test</Button>
        </Card>
      </div>

      <div className="mb-6">
        <Card header={t('components.toast_notifications')}>
          <div className={styles.buttonSeperator}>
            <Button
              color="positive"
              onClick={() => notifySuccess(t('components.action_performed_successfully'))}
            >
              {t('components.success_toast')}
            </Button>
            <Button
              color="negative"
              onClick={() => notifyError(t('components.error_completing_action'))}
            >
              {t('components.error_toast')}
            </Button>
            <Button color="warning" onClick={() => notifyWarning(t('components.action_warning'))}>
              {t('components.warning_toast')}
            </Button>
          </div>
        </Card>
      </div>
    </Page>
  );
};
