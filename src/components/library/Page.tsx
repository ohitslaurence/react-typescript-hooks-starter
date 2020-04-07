import React from 'react';
import styles from 'assets/css/library/Page.module.css';

type PageProps = {
  children?: React.ReactNode;
  banner?: boolean;
};

export const Page: React.FunctionComponent<PageProps> = ({
  children,
  banner = false,
}: PageProps) => {
  const renderBanner = () => {
    if (banner) {
      return (
        <div v-if="banner" className={`${styles.banner} bg-primary inset-x-0 top-0 fixed`}></div>
      );
    }
  };

  return (
    <div className="main-page p-5 md:p-8">
      {renderBanner()}
      {children}
    </div>
  );
};
