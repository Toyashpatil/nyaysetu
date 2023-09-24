import React from 'react'
import { Router, Routes, BrowserRouter, Route } from 'react-router-dom';
import AuthState from './context/AuthState'
import Button from './components/Button';
import Home from './pages/Home';
import UndertrialPrisoner from './pages/UndertrialPrisoner';
import LegalAdvice from './pages/LegalAdvice';
import MonitorCases from './pages/MonitorCases'
import ConnectToLegalServices from './pages/ConnectToLegalServices';
import Help from "./pages/Help";
import Admin from './components/AdminLayout';
import AdminHome from './pages/admin/AdminHome';
import UnderTrialPrisonerInCourt  from "./pages/admin/UnderTrialPrisonerInCourt";
import Notification from './pages/admin/Notification';
const App = () => {
  return (
    <div>
    <AuthState>
    <BrowserRouter>
        <>
          <Routes>
            <Route path='/' element={<UndertrialPrisoner />}></Route>
            <Route path='/login' element={<Home/>}></Route>
            <Route path='/legaladvice' element={<LegalAdvice/>} ></Route>
            <Route path='/monitorcase' element={<MonitorCases/>} ></Route>
            <Route path='/connect' element={<ConnectToLegalServices/>} ></Route>
            <Route path='/admin' element={<AdminHome/>}></Route>
            <Route path='/help' element={<Help/>}></Route>
            <Route path='/admin/connect' element={<UnderTrialPrisonerInCourt/>}></Route>
            <Route path='/admin/Noti' element={<Notification/>}></Route>
          </Routes>
        </>
      </BrowserRouter>
    </AuthState>
    </div>
  )
}

export default App