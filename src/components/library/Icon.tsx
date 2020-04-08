import React from 'react';

type IconProps = {
  marginRight?: string | null;
  marginLeft?: string | null;
  name: string;
  className?: string;
};

type IconStyle = {
  marginRight?: string;
  marginLeft?: string;
};

export const Icon: React.FunctionComponent<IconProps> = ({
  name,
  marginRight,
  marginLeft,
  className,
}: IconProps) => {
  /**
   * The base class of the icon
   */
  const iconClass: string = `fas fa-${name}`;

  /**
   * Additional classes added as props of the component
   */
  const additionalClasses: string = className ? className : '';

  /**
   * Build the style of the icon from the props
   */
  const style: IconStyle = {};

  if (marginRight) style.marginRight = marginRight;
  if (marginLeft) style.marginLeft = marginLeft;

  /**
   * Render the icon
   */
  return <i className={`${iconClass} ${additionalClasses}`} style={{ ...style }} />;
};
