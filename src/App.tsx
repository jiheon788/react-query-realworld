import React from 'react';
import Router from './Router';
import UserContextProvider from '@/contexts/UserContextProvider';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router />
      </UserContextProvider>
    </div>
  );
}

export default App;
