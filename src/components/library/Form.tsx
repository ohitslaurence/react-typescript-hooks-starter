import React from 'react';
import { useForm, FormContext, OnSubmit } from 'react-hook-form';

type FormProps = {
  /**
   * The title of the specific page being rendered
   */
  children?: React.ReactNode;

  /**
   * The callback to be run when the form is submitted
   */
  onSubmit?: OnSubmit<Record<string, any>>;
};

export const Form: React.FunctionComponent<FormProps> = ({
  children,
  onSubmit = (data: any) => {
    console.log(data);
  },
}: FormProps) => {
  const methods = useForm({
    reValidateMode: 'onBlur',
  });

  /**
   * Retern the FormItem component
   */
  return (
    <FormContext {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormContext>
  );
};
