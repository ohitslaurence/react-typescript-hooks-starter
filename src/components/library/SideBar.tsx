import React, { useEffect } from 'react';
import styles from 'assets/css/library/SideBar.module.css';

type SideBarProps = {
  /**
   * Determines the side of the page the layout should be fixed to
   */
  orientation?: 'left' | 'right';

  children?: React.ReactNode;
};

export const SideBar: React.FunctionComponent<SideBarProps> = ({
  orientation = 'left',
}: SideBarProps) => {
  useEffect(() => {
    const page = document.getElementById('page-window');

    if (page) page.classList.add(`with-sidebar-${orientation}`);
    return () => {
      if (page) page.classList.remove(`with-sidebar-${orientation}`);
    };
  }, [orientation]);

  const orientationClass: string = 'px-0 fixed block inset-y-0 pl-0 overflow-y-auto';

  const fixedClass: string = `${orientation}-0 fixed`;
  /**
   * Render the SideBar component
   */
  return (
    <nav
      className={`pb-4 ${
        styles.sidebar
      } ${orientationClass} bg-primary-background z-50 ${`fixed-${orientation}`} ${fixedClass}`}
    >
      <div className="h-screen">
        <slot />
      </div>
    </nav>
  );
};
