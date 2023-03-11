import React from 'react';
import { toast } from 'react-toastify';
import create from 'zustand';

const useAlertStore = create((set) => ({
  message: '',
  setMessage: (message) => set({ message }),
}));

const Alert = () => {
  const { message } = useAlertStore();

  React.useEffect(() => {
    if (message) {
      toast.success(message, {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [message]);

  return null;
};

export const showAlert = (message) => useAlertStore.setState({ message });

export default Alert;