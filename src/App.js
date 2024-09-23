import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout2 from './components/Layout2';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import Logout from './components/Logout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas que utilizan Layout2 */}
        <Route path="/UserProfile" element={<Layout2><UserProfile /></Layout2>} />
        <Route path="/EditProfile" element={<Layout2><EditProfile /></Layout2>} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/" element={<Layout2><UserProfile /></Layout2>} /> 
      </Routes>
    </Router>
  );
}

export default App;
