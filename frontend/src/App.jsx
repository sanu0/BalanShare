import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Signin} from './pages/Signin'
import { Signup } from './pages/Signup';
import { DashBoard } from './pages/DashBoard';
import { SendMoney } from './pages/SendMoney';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
