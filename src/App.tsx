import React from 'react';
import Router from './Router';
import UserContextProvider from '@/contexts/UserContextProvider';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="App">
      <UserContextProvider>
      <ToastContainer position="top-right" autoClose={3000} />
        <Router />
      </UserContextProvider>
    </div>
  );
}

export default App;
