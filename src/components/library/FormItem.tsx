import React from 'react';

type FormItemProps = {
  /**
   * The title of the specific page being rendered
   */
  children?: React.ReactNode;

  label?: string;
};

export const FormItem: React.FunctionComponent<FormItemProps> = ({
  children,
  label,
}: FormItemProps) => {
  const renderLabel = () => {
    if (label) {
      return <span className="block mb-2 text-sm font-medium">{label}</span>;
    }
  };

  /**
   * Retern the FormItem component
   */
  return (
    <div>
      {renderLabel()}
      {children}
    </div>
  );
};
