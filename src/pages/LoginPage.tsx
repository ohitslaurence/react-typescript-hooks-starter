import React, { useState } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useTranslation } from 'react-i18next';
import { Page, Form, Input, FormItem, Button } from '../components/library';
import { isValidEmail } from 'utils/isValidEmail';

export const LoginPage: React.FunctionComponent<RouteComponentProps> = (
  props: RouteComponentProps
) => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Page banner className="flex justify-center">
      <div className="bg-white w-full max-w-md shadow-md rounded py-10">
        <div className="flex justify-center">
          <Form onSubmit={() => {}}>
            <FormItem label={t('components.email')}>
              <Input
                name="email"
                validation={(value) => isValidEmail(value)}
                validationMessage={t('components.email_validation')}
                value={email}
                onChange={setEmail}
                icon="envelope"
                placeholder={t('components.examplecom')}
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
            <Button className="mt-2" fullWidth type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </Page>
  );
};
