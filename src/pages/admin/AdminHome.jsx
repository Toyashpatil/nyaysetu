import React from 'react'
import Admin from '../../components/AdminLayout'

const AdminHome = () => {
  return (
    <div className='flex flex-col max-h-screen'>
        {/* Admin wrapper contains sidebar by default */}
        {/* Only add in children */}
      <Admin> 
        Hello
      </Admin>
      
    </div>
    
  )
}

export default AdminHome