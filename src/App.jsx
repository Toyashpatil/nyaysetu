import React from 'react'
import AuthState from './context/AuthState'
import Button from './components/Button';
import Home from './pages/Home';
import UndertrialPrisoner from './pages/UndertrialPrisoner';

const App = () => {
  return (
    <div>
    <AuthState>
        <div>
            <UndertrialPrisoner/>
        </div>
    </AuthState>
    </div>
  )
}

export default App