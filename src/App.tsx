import React from 'react';

import Dashboard from 'views/Dashboard';

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
      {children}
    </>
  )
}

export default App;
