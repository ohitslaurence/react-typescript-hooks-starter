/**
 * Set an item in local storage by key
 *
 * @param {string} key The key of the value to be stored
 * @param {any} value The value to be stored
 *
 * @return {Promise<void>}
 */
export const setlocalStorage = async (key: string, value: any): Promise<void> => {
  localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Get an item from local storage by key
 *
 * @param {string} key The key of the value to be retrieved
 *
 * @return {Promise<any>}
 */
export const getlocalStorage = async (key: string): Promise<any> => {
  const item: any = localStorage.getItem(key as string);

  return JSON.parse(item);
};
