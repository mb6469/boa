// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Transfers from './pages/Transfers';
import Transactions from './pages/Transactions';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

import { AuthProvider, useAuth } from './context/AuthContext';


function AppContent() {
  const { currentUser } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  console.log("Current User:", currentUser);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {currentUser ? (
          <>
            <Navbar onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            <div className="flex">
              <Sidebar isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
              <div className="flex-1 p-4 md:p-6 w-full">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/accounts" element={<Accounts />} />
                  <Route path="/transfers" element={<Transfers />} />
                  <Route path="/transactions" element={<Transactions />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="*" element={<Navigate to="/" />} />
                </Routes>
              </div>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        )}
      </div>
    </Router >
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;