import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, useToast } from '../library';
import styles from 'assets/css/pages/ComponentsPage.module.css';

type ToastsExampleProps = {};

export const ToastsExample: React.FunctionComponent<ToastsExampleProps> = (
  props: ToastsExampleProps
) => {
  const { notifyError, notifySuccess, notifyWarning } = useToast();
  const { t } = useTranslation();

  return (
    <div>
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
    </div>
  );
};
