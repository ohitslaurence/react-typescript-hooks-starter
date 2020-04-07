import React, { useEffect } from 'react';
import styles from 'assets/css/library/SideBar.module.css';

type SideBarProps = {
  /**
   * Determines the side of the page the layout should be fixed to
   */
  orientation?: 'left' | 'right';

  /**
   * The children of the sidebar component
   */
  children?: React.ReactNode;
};

export const SideBar: React.FunctionComponent<SideBarProps> = ({
  orientation = 'left',
  children,
}: SideBarProps) => {
  /**
   * When the sidebar is mounted, add the appropriate class to the main body window
   */
  useEffect(() => {
    const page = document.getElementById('page-window');

    if (page) page.classList.add(`with-sidebar-${orientation}`);
    return () => {
      if (page) page.classList.remove(`with-sidebar-${orientation}`);
    };
  }, [orientation]);

  /**
   * The classes added to give the sidebar its layout
   */
  const layoutClass: string = 'px-0 fixed block inset-y-0 pl-0 overflow-y-auto';

  /**
   * Classes to fix the component to the side of the page
   */
  const fixedClass: string = `${orientation}-0 fixed`;
  /**
   * Render the SideBar component
   */
  return (
    <nav
      className={`pb-4 ${
        styles.sidebar
      } ${layoutClass} bg-primary-background z-50 ${`fixed-${orientation}`} ${fixedClass}`}
    >
      <div className="h-screen">{children}</div>
    </nav>
  );
};
