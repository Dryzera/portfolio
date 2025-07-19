import { Bounce, ToastContainer } from 'react-toastify';

export function MessagesComponent() {
  return (
    <ToastContainer
      position='top-center'
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
      transition={Bounce}
      toastClassName='custom-toast'
    />
  );
}
