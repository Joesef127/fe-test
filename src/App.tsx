import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login.tsx';
import Dashboard from '../src/pages/Dashboard.tsx';
import UserDetails from './pages/UserDetails.tsx';

// import NavBar from './components/NavBar.tsx';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
