import React from 'react'
import Admin from '../../components/AdminLayout'
import AdminCard from '../../components/AdminCard'

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