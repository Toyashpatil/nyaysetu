import React from 'react'
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom';
import AuthState from './context/AuthState'
import Button from './components/Button';
import Home from './pages/Home';
import UndertrialPrisoner from './pages/UndertrialPrisoner';
import LegalAdvice from './pages/LegalAdvice';
import Admin from './pages/Admin';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <>
          <Routes>
            <Route path='/' element={<UndertrialPrisoner />}></Route>
            <Route path='/login' element={<Home/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
          </Routes>
        </>
      </BrowserRouter>
    </div>
  )
}

export default App