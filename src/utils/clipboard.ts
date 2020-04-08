/**
 * Helper function to copy a string of text to the clipboard
 *
 * @param {string} string The string to be copied to the clipboard
 *
 * @return {Promise<void>}
 */
export const copy = async (string: string): Promise<void> => {
  const el: HTMLTextAreaElement = document.createElement('textarea');
  el.value = string;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
