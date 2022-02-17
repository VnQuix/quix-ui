
import React from 'react';

import Dashboard from 'views/Dashboard';

import { WalletContextProvider } from 'contexts/Wallet';
import { Slide, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css'
import './bootstrap.min.css';


const App: React.FC = () => {
  return (
    <Providers>
      <Dashboard />
    </Providers>
  );
}

const Providers: React.FC = ({ children }) => {
  return (
    <>
      <WalletContextProvider>
        {children}
      </WalletContextProvider>
      <ToastContainer transition={Slide} position='bottom-left' closeOnClick theme='colored' />
    </>
  )
}

export default App;
