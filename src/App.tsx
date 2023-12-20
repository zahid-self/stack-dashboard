import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Users from './pages/dashboard/Users';
import Home from './pages/dashboard/Home';
import ProtectedRoute from './components/ProtectedRoute';
import { useEffect, useState } from 'react';
import PublicRoute from './components/PublicRoute';


const App: React.FunctionComponent = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<PublicRoute><Signin /></PublicRoute>} />
        <Route path='/signup' element={<PublicRoute><Signup /></PublicRoute>} />
        <Route path='/dashboard' element={<ProtectedRoute><Home /></ProtectedRoute>} />
        <Route path='/dashboard/users' element={<ProtectedRoute><Users /></ProtectedRoute>} />
      </Routes>
    </Router>
  )
}

export default App

