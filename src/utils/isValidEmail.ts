/**
 * Helper function to determine if a string matches the requirements for a valid email address
 *
 * @param {string} string The string to be tested
 *
 * @return {boolean}
 */
export const isValidEmail = (string: string): boolean => {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    string
  );
};
