import React, { useState } from 'react';
import { isEmpty as _isEmpty } from 'lodash';
import { useFormContext, CustomElement } from 'react-hook-form';
import { Icon } from './Icon';
import styles from 'assets/css/library/Input.module.css';

type InputProps = {
  /**
   * Determines whether the button has a solid background or an outline
   */
  type?: string;

  /**
   * Name of the icon to be used in the input
   */
  icon?: string;

  /**
   * String to be used as placeholder text for the input
   */
  placeholder?: string;

  /**
   * The string value to be displayed in the input
   */
  value?: string;

  /**
   * The name of the form element for validation
   */
  name?: string;

  /**
   * Function to validate the contents of the form element
   */
  validation?: (value: any) => boolean;

  /**
   * Message to be displayed when the firm item is invalid
   */
  validationMessage?: string;

  /**
   * Fuction to run when the input is changed
   */
  onChange?: (val: string) => void;
};

export const Input: React.FunctionComponent<InputProps> = ({
  value = '',
  placeholder = '',
  icon,
  type = 'text',
  name,
  validation,
  validationMessage = 'This field is not valid',
  onChange = (val) => {},
}: InputProps) => {
  /**
   * Get the form context from the form
   */
  const context = useFormContext();

  /**
   * Has the field been validated?
   */
  const isValid = name && context.errors[name] ? false : true;

  /**
   * The focused state of the input
   */
  const [focus, setFocus] = useState(false);

  /**
   * The base class for the button, applied in all configurations
   */
  const inputClass: string = 'outline-none px-4 py-2 border border-solid flex-1';

  /**
   * The class to be added to the icon container if present
   */
  const prependClass: string =
    'border border-solid rounded-l border-r-0 flex flex-row justify-center items-center';

  /**
   * Class applied to the div that groups the elements
   */
  const groupClass: string = 'flex flex-row border-gray-300 text-gray-600';

  /**
   * Class to be applied based in the presence of an icon
   */
  const iconClass: string = _isEmpty(icon) ? 'rounded' : 'rounded-r';

  /**
   * Class to be applied when focus is given to the input
   */
  const focusClass: string = focus ? 'border-primary' : '';

  /**
   * The class applied to the various elements when the form item is invalid
   */
  const validationClass: string = !isValid ? 'border-negative' : '';

  /**
   * Props to be added to the native input for form validation
   */
  const formInputProps: {
    name?: string;
    ref?: (
      ref: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement | null
    ) => void;
  } = {};

  if (name) formInputProps.name = name;
  if (name && validation) formInputProps.ref = context.register({ validate: validation });

  /**
   * Function to render the icon inside the input if an icon name is given
   */
  const renderIcon = () => {
    if (icon) {
      return (
        <div
          v-if="icon"
          className={`input-prepend ${focusClass} ${prependClass} ${styles.inputPrepend} ${validationClass}`}
        >
          <Icon name={icon} className="text-base" />
        </div>
      );
    }
  };

  const renderValidationContainer = () => {
    if (name && validation) {
      return (
        <div className={`text-negative text-xs ${styles.validationMessage}`}>
          {name && context.errors[name] && validationMessage}
        </div>
      );
    }
  };

  /**
   * Render the input element
   */
  return (
    <div>
      <div className={`${styles.inputGroup} ${groupClass} ${focusClass} ${validationClass}`}>
        {renderIcon()}

        <input
          {...formInputProps}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          onChange={(event) => onChange(event.target.value)}
          value={value}
          placeholder={placeholder}
          className={`${inputClass} ${iconClass} ${focusClass} ${validationClass}`}
          type={type}
        />
      </div>
      {renderValidationContainer()}
    </div>
  );
};
