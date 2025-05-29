import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header.tsx'; 
import Login from './pages/Login.tsx';
import NewLogin from './pages/NewLogin.tsx';
import { AuthProvider } from './contexts/AuthContext.tsx';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/new" element={<NewLogin />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};


export default App;
