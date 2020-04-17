import React from 'react';

type PageProps = {
  children?: React.ReactNode;
  banner?: boolean;
  color?: string;
  className?: string;
};

export const Page: React.FunctionComponent<PageProps> = ({
  children,
  banner = false,
  color = 'primary',
  className = '',
}: PageProps) => {
  const renderBanner = () => {
    if (banner) {
      return <div v-if="banner" className={`banner bg-${color} inset-x-0 top-0 fixed`}></div>;
    }
  };

  return (
    <div className={`main-page p-5 md:p-8 ${className}`}>
      {renderBanner()}
      {children}
    </div>
  );
};
