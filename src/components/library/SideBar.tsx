import React, { useEffect, useState, forwardRef, useImperativeHandle, useCallback } from 'react';
import cx from 'classnames';
import { usePrevious } from 'utils/usePrevious';
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

const breakpoint = 1024;

/**
 * Screen is being resized from mobile to web
 *
 * @param width
 * @param prevWidth
 *
 * @return {}
 */
const resizingToWeb = (width: number, prevWidth: number | undefined): boolean => {
  return width >= breakpoint && prevWidth !== undefined && prevWidth < breakpoint;
};

/**
 * Screen is being resized from web to mobile
 *
 * @param {number} width
 * @param {number | undefined} prevWidth
 *
 * @return {}
 */
const resizingToMobile = (width: number, prevWidth: number | undefined): boolean => {
  return width < breakpoint && prevWidth !== undefined && prevWidth >= breakpoint;
};

/**
 * Removes all classes affecting the main page offset
 *
 * @param {HTMLElement | null} page The main page as a html element
 * @param {'left' | 'right'} orientation The orientation of the sidebar
 *
 * @return {void}
 */
const removePageLayoutClasses = (page: HTMLElement | null, orientation: string): void => {
  if (page) {
    page.classList.remove(`with-sidebar-${orientation}`);
    page.classList.remove(`with-sidebar-${orientation}-mobile`);
  }
};

export const SideBar: React.FunctionComponent<SideBarProps> = forwardRef(
  ({ orientation = 'left', children }, ref) => {
    /**
     * Holds the open state for the component
     */
    const [open, setOpen] = useState(false);

    /**
     * Holds the width of the screen
     */
    const [width, setWidth] = useState(window.innerWidth);

    /**
     * Track the width of the screen in the previous render
     */
    const prevWidth: number | undefined = usePrevious<number>(width);

    /**
     * Function to progmatically open/close the sidebar
     */
    const toggleOpen = useCallback(() => {
      const page = document.getElementById('page-window');

      if (open) {
        removePageLayoutClasses(page, orientation);
      } else if (page) {
        if (width > breakpoint) {
          page.classList.add(`with-sidebar-${orientation}`);
        } else {
          page.classList.add(`with-sidebar-${orientation}-mobile`);
        }
      }
      setOpen(!open);
    }, [open, orientation, width]);

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

      if (width >= breakpoint) {
        if (page) page.classList.add(`with-sidebar-${orientation}`);
        setOpen(true);
      }

      return () => {
        removePageLayoutClasses(page, orientation);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [orientation]);

    /**
     * Handles the resize event listener
     */
    useEffect(() => {
      const page = document.getElementById('page-window');

      const resizeListener = () => {
        setWidth(window.innerWidth);

        if (resizingToWeb(width, prevWidth) && !open) {
          setOpen(true);
          if (page) page.classList.add(`with-sidebar-${orientation}`);
        } else if (resizingToMobile(width, prevWidth) && open) {
          setOpen(false);
          removePageLayoutClasses(page, orientation);
        }
      };

      window.addEventListener('resize', resizeListener);
      return () => {
        window.removeEventListener('resize', resizeListener);
      };
    }, [open, orientation, prevWidth, width]);

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
