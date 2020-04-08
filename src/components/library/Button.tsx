import React from 'react';
import styles from 'assets/css/library/Button.module.css';

type ButtonProps = {
  /**
   * Determines whether the button has a solid background or an outline
   */
  outline?: boolean;

  /**
   * Determines the color of the button
   */
  color?: string;

  /**
   * If true, the button fills the width of the container it is inside
   */
  fullWidth?: boolean;

  /**
   * Should the button be clickable
   */
  disabled?: boolean;

  /**
   * The native html type of the button
   */
  type?: 'button' | 'submit' | 'reset' | undefined;

  /**
   * The size of the button
   */
  size?: string;

  /**
   * The children of the button component
   */
  children?: React.ReactNode;

  onClick?: () => void;
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  outline = false,
  color = 'primary',
  fullWidth = false,
  disabled = false,
  type = 'button',
  size = 'medium',
  children,
  onClick = () => {},
}: ButtonProps) => {
  /**
   * The base class for the button, applied in all configurations
   */
  const baseClass: string =
    'outline-none relative normal-case tracking-wide font-semibold rounded shadow-xl no-select';

  /**
   * Determines the class that modifies the cursor of the button
   *
   * @return {string}
   */
  const cursorClass: string = ((): string => {
    return disabled ? 'cursor-not-allowed opacity-50' : '';
  })();

  /**
   * Determines the classes that modify the width of the button
   *
   * @return {string}
   */
  const widthClass: string = ((): string => {
    return fullWidth ? 'w-full' : '';
  })();

  /**
   * Determines the classes that modify the size of the button
   *
   * @return {string}
   */
  const sizeClass: string = ((): string => {
    if (size === 'medium') {
      return 'text-xs px-4 py-2';
    } else if (size === 'small') {
      return 'text-xs px-3 py-1';
    }
    return '';
  })();

  /**
   * Determines the classes that modify the border color of the button
   *
   * @return {string}
   */
  const btnClass: string = ((): string => {
    const outlineClass = outline ? 'outline-' : '';

    return `btn-${outlineClass}${color}`;
  })();

  /**
   * Determines the classes require for the background color of the button
   *
   * @return {string}
   */
  const bgClass: string = ((): string => {
    if (outline)
      return `border-${color} text-${color} hover:text-white hover:bg-${color} active:shadow-none active:bg-${color}-dark`;

    return `bg-${color} active:bg-${color}-dark text-white`;
  })();

  /**
   * Render the button
   */
  return (
    <button
      className={`${styles.btn} ${baseClass} ${btnClass} ${bgClass} ${sizeClass} ${cursorClass} ${widthClass}`}
      type={type}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {/* <l-icon
      v-if="!isEmpty(icon)"
      :name="icon"
      :class="{ 'text-base': size === 'medium', 'text-sm': size === 'small' }"
      :margin-right="hasSlot('default') ? '6px' : ''"
    /> */}
      {children}
    </button>
  );
};
