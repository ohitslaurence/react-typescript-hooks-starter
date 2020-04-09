import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { isValidEmail } from '../../utils/isValidEmail';
import { FormItem, Input, Form, Button, useToast } from '../library';
import styles from 'assets/css/pages/ComponentsPage.module.css';

type FormValidationExampleProps = {};

export const FormValidationExample: React.FunctionComponent<FormValidationExampleProps> = (
  props: FormValidationExampleProps
) => {
  const { notifySuccess } = useToast();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { t } = useTranslation();

  const onSubmit = () => {
    notifySuccess(t('components.form_submission_successful'));
  };

  return (
    <div className={`max-w-lg ${styles.formSeperator}`}>
      <Form onSubmit={onSubmit}>
        <FormItem label={t('components.first_name')}>
          <Input
            name="firstName"
            validation={(value) => value.length > 1}
            validationMessage={t('components.first_name_validation')}
            value={firstName}
            onChange={setFirstName}
            icon="user"
            placeholder={t('components.enter_first_name')}
          />
        </FormItem>
        <FormItem label={t('components.last_name')}>
          <Input
            name="lastName"
            validation={(value) => value.length > 1}
            validationMessage={t('components.last_name_validation')}
            value={lastName}
            onChange={setLastName}
            icon="user"
            placeholder={t('components.enter_last_name')}
          />
        </FormItem>
        <FormItem label={t('components.email')}>
          <Input
            name="email"
            validation={(value) => isValidEmail(value)}
            validationMessage={t('components.email_validation')}
            value={email}
            onChange={setEmail}
            icon="envelope"
            placeholder={t('components.enter_email_address')}
          />
        </FormItem>
        <FormItem label={t('components.password')}>
          <Input
            name="password"
            validation={(value) => value.length > 6}
            validationMessage={t('components.password_validation')}
            value={password}
            onChange={setPassword}
            icon="lock"
            type="password"
            placeholder={t('components.enter_password_account')}
          />
        </FormItem>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};
