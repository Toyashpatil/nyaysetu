import React from 'react'
import AuthState from './context/AuthState'
import Button from './components/Button';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
    <AuthState>
        <div>
            <Home></Home>
        </div>
    </AuthState>
    </div>
  )
}

export default App