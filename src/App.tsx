import React from 'react';

const App: React.FC = () => {
  return (
    <Providers>

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
