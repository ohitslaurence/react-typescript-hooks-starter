import React from 'react';
import cx from 'classnames';
import styles from 'assets/css/library/Card.module.css';

type CardProps = {
  children?: React.ReactNode;
  bodyPadding?: boolean;
  color?: string;
  header?: React.ReactNode;
};

export const Card: React.FunctionComponent<CardProps> = ({
  children,
  header,
  bodyPadding = true,
  color = 'primary',
}: CardProps) => {
  /**
   * Class to define the style of the Card wrapper div
   */
  const wrapperClass: string = 'card bg-white shadow-lg rounded-lg overflow-hidden';

  /**
   * Padding around the Card body can optionally be removed
   */
  const bodyPaddingClass: string = cx({
    [styles.cardBody]: bodyPadding,
  });

  /**
   * Render the component passed to the Header slot of the Card
   */
  const renderHeader = () => {
    if (header) {
      return (
        <div className={styles.cardHeader}>
          <div className="mb-0 flex">
            <div className="flex-1 flex items-center">{header}</div>
          </div>
        </div>
      );
    }
  };

  /**
   * Render the children of the Card component
   */
  const renderBody = () => {
    if (children) {
      return <div className={bodyPaddingClass}>{children}</div>;
    }
  };

  return (
    <div className={`${bodyPaddingClass} ${wrapperClass}`}>
      {renderHeader()}
      {renderBody()}
    </div>
  );
};
