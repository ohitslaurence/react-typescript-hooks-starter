import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FormItem, Input } from '../library';
import styles from 'assets/css/pages/ComponentsPage.module.css';

type FormsExampleProps = {};

export const FormsExample: React.FunctionComponent<FormsExampleProps> = (
  props: FormsExampleProps
) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [standard, setStandard] = useState('');
  const [column, setColumn] = useState('');
  const [icon, setIcon] = useState('');
  const { t } = useTranslation();

  return (
    <div className={`max-w-lg ${styles.formSeperator}`}>
      <FormItem label={t('components.email')}>
        <Input value={email} onChange={setEmail} placeholder={t('components.examplecom')} />
      </FormItem>
      <div className="flex flex-row flex-wrap -mx-2">
        <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
          <FormItem label={t('components.column_heading')}>
            <Input
              value={standard}
              onChange={setStandard}
              placeholder={t('components.standard_input')}
            />
          </FormItem>
        </div>
        <div className="w-full md:w-1/2 px-2">
          <FormItem label={t('components.column_heading')}>
            <Input
              value={column}
              onChange={setColumn}
              placeholder={t('components.standard_input')}
            />
          </FormItem>
        </div>
      </div>
      <Input
        value={icon}
        onChange={setIcon}
        icon="envelope"
        placeholder={t('components.icon_input')}
      />
      <Input
        value={password}
        onChange={setPassword}
        icon="lock"
        type="password"
        placeholder={t('components.password_input')}
      />
    </div>
  );
};
