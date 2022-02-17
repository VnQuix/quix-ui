
import React, { useEffect } from 'react';

import Dashboard from 'views/Dashboard';

import { WalletContextProvider } from 'contexts/Wallet';
import { Slide, ToastContainer, toast } from 'react-toastify';
import useWallet from 'hooks/useWallet';

import 'react-toastify/dist/ReactToastify.css'
import './bootstrap.min.css';


const App: React.FC = () => {
  const { account } = useWallet()

  useEffect(() => {
    if (!account)
      toast.info('Please Connect Wallet')
  }, [account])

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
