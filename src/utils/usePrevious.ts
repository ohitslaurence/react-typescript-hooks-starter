import { useRef, useEffect } from 'react';

/**
 * Custom hook to track the previous state of a variable within a function
 *
 * @param {T} value The value that you want to track
 *
 * @return {T | undefined}
 */
export const usePrevious = <T extends any>(value: T): T | undefined => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value!;
  });
  return ref.current;
};
