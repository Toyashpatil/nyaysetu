import React from 'react'
import Admin from '../../components/AdminLayout'

const AdminHome = () => {
  return (
    <div>
        {/* Admin wrapper contains sidebar by default */}
        {/* Only add in children */}
      <Admin> 
        <div>
            Hello World
        </div>
      </Admin>
    </div>
    
  )
}

export default AdminHome