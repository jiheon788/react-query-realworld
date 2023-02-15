import React from 'react';
import Header from '@/components/header/Header';
import Router from './Router';
import Footer from '@/components/Footer';
import UserContextProvider from '@/contexts/UserContextProvider';

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Router />
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
