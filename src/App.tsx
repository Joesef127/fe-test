import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/pages/Login.tsx';
import Dashboard from '../src/pages/Dashboard.tsx';

// import NavBar from './components/NavBar.tsx';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
