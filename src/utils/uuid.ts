/**
 * Helper to generate a simple UUID
 *
 * @return {string}
 */
export const uuid = (): string => {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
};
