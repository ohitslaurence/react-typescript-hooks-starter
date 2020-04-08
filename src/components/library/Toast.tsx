import { useContext, createContext } from 'react';
import { Notyf } from 'notyf';

type ToastContextProps = {
  notify: Notyf;
};

/**
 * The context objext for the notification
 */
const ToastContext = createContext<ToastContextProps>({
  notify: new Notyf({
    duration: 1000,
    position: {
      x: 'right',
      y: 'top',
    },
    types: [
      {
        type: 'success',
        background: 'var(--color-positive)',
        duration: 2000,
        dismissible: true,
        ripple: false,
      },
      {
        type: 'error',
        background: 'var(--color-negative)',
        duration: 2000,
        dismissible: true,
        ripple: false,
      },
      {
        type: 'warning',
        background: 'var(--color-warning)',
        duration: 2000,
        dismissible: true,
        ripple: false,
      },
    ],
  }),
});

/**
 * The hook to be used in components
 */
export const useToast = () => {
  const ctx = useContext(ToastContext);

  if (!ctx) {
    throw Error('The `useToasts` hook must be called from a descendent of the `ToastProvider`.');
  }

  return {
    notifySuccess(message: string) {
      ctx.notify.open({
        type: 'success',
        message: message,
      });
    },
    notifyError(message: string) {
      ctx.notify.open({
        type: 'error',
        message: message,
      });
    },
    notifyWarning(message: string) {
      ctx.notify.open({
        type: 'warning',
        message: message,
      });
    },
  };
};
