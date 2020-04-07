import React, { useState } from 'react';
import { isEmpty as _isEmpty } from 'lodash';
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
   * Fuction to run when the input is changed
   */
  onChange?: (val: string) => void;
};

export const Input: React.FunctionComponent<InputProps> = ({
  value = '',
  placeholder = '',
  icon,
  type = 'text',
  onChange = (val) => {},
}: InputProps) => {
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
   * Function to render the icon inside the input if an icon name is given
   */
  const renderIcon = () => {
    if (!_isEmpty(icon)) {
      return (
        <div
          v-if="icon"
          className={`input-prepend ${focusClass} ${prependClass} ${styles.inputPrepend}`}
        ></div>
      );
    }
  };

  /**
   * Render the input element
   */
  return (
    <div className={`${styles.inputGroup} ${groupClass} ${focusClass}`}>
      {renderIcon()}

      <input
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        onChange={(event) => onChange(event.target.value)}
        value={value}
        placeholder={placeholder}
        className={`${inputClass} ${iconClass} ${focusClass}`}
        type={type}
      />
    </div>
  );
};
