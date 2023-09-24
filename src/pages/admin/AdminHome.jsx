import React from 'react'
import Admin from '../../components/AdminLayout'
import  RectangleImg  from "../assets/rectangleimg.jpg";
import NearbyLawyerCard from '../../components/NearbyLawyerCard'
import LCard from '../../components/LCard'
const AdminHome = () => {
 
  return (
    <div className='flex flex-col max-h-screen'>
        {/* Admin wrapper contains sidebar by default */}
        {/* Only add in children */}
      <Admin> 
       
      </Admin>
      
    </div>
    
  )
}

export default AdminHome