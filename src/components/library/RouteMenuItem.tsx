import React from 'react';
import { useMatch, navigate } from '@reach/router';
import styles from 'assets/css/library/RouteMenuItem.module.css';

type RouteMenuItemProps = {
  /**
   * The name of the menu item
   */
  name?: string;

  /**
   * The route that the item should navigate to
   */
  path?: string;

  /**
   * Show the arrow icon in the menu item
   */
  arrow?: boolean;
};

export const RouteMenuItem: React.FunctionComponent<RouteMenuItemProps> = ({
  name = '',
  path = '/',
  arrow = true,
}: RouteMenuItemProps) => {
  const match = useMatch(path);

  /**
   * The classes applied to the menu item
   */
  const itemClass: string = `mx-2 p-4 py-3 text-sm flex justify-between rounded cursor-pointer text-gray-700 hover:text-black`;

  /**
   * THe class applied when the current route matches the path
   */
  const activeClass: string = match ? 'bg-sec-background' : '';

  /**
   * Function to handle navigation to the path
   */
  const handleNavigation = () => {
    navigate(path);
  };

  /**
   * Render the RouteMenuItem component
   */
  return (
    <div onClick={handleNavigation} className={`${styles.menuItem} ${itemClass} ${activeClass}`}>
      <div className="flex items-center">
        {/* <div v-if="!isEmpty(icon)" style="width: 25px;margin-right:12px;text-align: center">
        <l-icon :name="icon" class="text-base" :class="`text-${iconColour}`" />
      </div> */}

        <span className="no-select">{name}</span>
      </div>
      <div></div>
    </div>
  );
};
