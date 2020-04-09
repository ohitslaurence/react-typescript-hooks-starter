import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../library';
import styles from 'assets/css/pages/ComponentsPage.module.css';

type ButtonsExampleProps = {};

export const ButtonsExample: React.FunctionComponent<ButtonsExampleProps> = (
  props: ButtonsExampleProps
) => {
  const { t } = useTranslation();

  return (
    <div>
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
    </div>
  );
};
