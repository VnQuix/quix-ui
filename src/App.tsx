
import React from 'react';

import Dashboard from 'views/Dashboard';

import { WalletContextProvider } from 'contexts/Wallet';

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
    </>
  )
}

export default App;
