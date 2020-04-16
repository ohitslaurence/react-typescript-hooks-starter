import React, { useEffect, useState, forwardRef, useImperativeHandle, useCallback } from 'react';
import cx from 'classnames';
import styles from 'assets/css/library/SideBar.module.css';

export type SideBarProps = {
  /**
   * Determines the side of the page the layout should be fixed to
   */
  orientation?: 'left' | 'right';

  /**
   * The children of the sidebar component
   */
  children?: React.ReactNode;

  /**
   * The ref object passed from the parent
   */
  ref?: React.RefObject<any>;
};

export const SideBar: React.FunctionComponent<SideBarProps> = forwardRef(
  ({ orientation = 'left', children }, ref) => {
    /**
     * Holds the open state for the component
     */
    const [open, setOpen] = useState(false);

    /**
     * Function to progmatically open/close the sidebar
     */
    const toggleOpen = useCallback(() => {
      const page = document.getElementById('page-window');
      const width = window.innerWidth;

      if (open && page) {
        page.classList.remove(`with-sidebar-${orientation}`);
        page.classList.remove(`with-sidebar-${orientation}-mobile`);
      } else if (page) {
        if (width > 1024) {
          page.classList.add(`with-sidebar-${orientation}`);
        } else {
          page.classList.add(`with-sidebar-${orientation}-mobile`);
        }
      }
      setOpen(!open);
    }, [open, orientation]);

    /**
     * Exposes the toggle function to the parent
     */
    useImperativeHandle(
      ref,
      () => ({
        toggle: () => {
          toggleOpen();
        },
      }),
      [toggleOpen]
    );

    /**
     * When the sidebar is mounted, add the appropriate class to the main body window
     */
    useEffect(() => {
      const page = document.getElementById('page-window');
      const width = window.innerWidth;

      if (width >= 1024) {
        if (page) page.classList.add(`with-sidebar-${orientation}`);
        setOpen(true);
      }

      return () => {
        if (page) page.classList.remove(`with-sidebar-${orientation}`);
      };
    }, [orientation]);

    /**
     * Handles the resize event listener
     */
    useEffect(() => {
      const page = document.getElementById('page-window');

      const resizeListener = () => {
        const width = window.innerWidth;

        if (width >= 1024 && !open) {
          setOpen(true);
          if (page) page.classList.add(`with-sidebar-${orientation}`);
        } else if (width < 1024 && open) {
          setOpen(false);
          if (page) page.classList.remove(`with-sidebar-${orientation}`);
        }
      };

      window.addEventListener('resize', resizeListener);
      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }, [open, orientation]);

    /**
     * Base class applied to sidebar in every state
     */
    const baseClass: string = 'pb-4 bg-primary-background z-50';

    /**
     * The classes added to give the sidebar its layout
     */
    const layoutClass: string = 'px-0 fixed block inset-y-0 pl-0 overflow-y-auto';

    /**
     * Classes to fix the component to the side of the page
     */
    const orientationClass: string = cx('fixed', [`fixed-${orientation}`], {
      [`${orientation}-0`]: open,
      [`${styles[`sidebar-${orientation}-hidden`]}`]: !open,
    });

    /**
     * Render the SideBar component
     */
    return (
      <aside className={`${styles.sidebar} ${baseClass} ${layoutClass} ${orientationClass}`}>
        <div className="h-screen">{children}</div>
      </aside>
    );
  }
);
