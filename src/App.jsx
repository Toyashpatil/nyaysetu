import React from 'react'
import AuthState from './context/AuthState'
import Button from './components/Button';

const App = () => {
  return (
    <div>
    <AuthState>
        <div>
            <Button/>
        </div>
    </AuthState>
    </div>
  )
}

export default App