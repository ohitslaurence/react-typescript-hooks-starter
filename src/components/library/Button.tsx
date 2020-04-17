import React from 'react';
import cx from 'classnames';
import { isEmpty as _isEmpty } from 'lodash';
import { Icon } from './Icon';

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
   * The name of the icon to be displayed on the button
   */
  icon?: string;

  /**
   * The children of the button component
   */
  children?: React.ReactNode;

  className?: string;

  onClick?: () => void;
};

export const Button: React.FunctionComponent<ButtonProps> = ({
  outline = false,
  color = 'primary',
  fullWidth = false,
  disabled = false,
  type = 'button',
  size = 'medium',
  className = '',
  icon,
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
  const cursorClass: string = cx({
    'cursor-not-allowed opacity-50': disabled,
  });

  /**
   * Determines the classes that modify the width of the button
   *
   * @return {string}
   */
  const widthClass: string = cx({
    'w-full': fullWidth,
  });

  /**
   * Determines the classes that modify the size of the button
   *
   * @return {string}
   */
  const sizeClass: string = cx({
    'text-xs px-4 py-2': size === 'medium',
    'text-xs px-3 py-1': size === 'small',
  });

  /**
   * Determines the classes that modify the border color of the button
   *
   * @return {string}
   */
  const btnClass: string = cx({
    [`btn-outline-${color}`]: outline,
    [`btn-${color}`]: !outline,
  });

  /**
   * Determines the classes require for the background color of the button
   *
   * @return {string}
   */
  const bgClass: string = cx({
    'hover:text-white active:shadow-none': outline,
    [`border-${color} text-${color} hover:bg-${color} active:bg-${color}-dark`]: outline,
    [`bg-${color} active:bg-${color}-dark text-white`]: !outline,
  });

  const renderIcon = () => {
    const marginRight = !_isEmpty(children) ? '8px' : null;

    /**
     * Render the icon if ht eprop is present
     */
    if (icon) {
      return <Icon name={icon} marginRight={marginRight} />;
    }
  };

  /**
   * Render the button
   */
  return (
    <button
      className={`btn ${className} ${baseClass} ${btnClass} ${bgClass} ${sizeClass} ${cursorClass} ${widthClass}`}
      type={type}
      disabled={disabled}
      onClick={() => onClick()}
    >
      {renderIcon()}
      {children}
    </button>
  );
};
