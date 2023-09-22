import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate=useNavigate()
  
  
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate('/login')
    }
  }, [])
  return (
    <div>Admin</div>
  )
}

export default Admin