import React from 'react'
import Admin from '../../components/AdminLayout'
import AdminCardnew from '../../components/AdminCardnew'

const Notification = () => {
  return (
    <div>
        <Admin>
            <div>
            <div className='mt-10 ml-10'>
                <h1 className='admin_font font-bold'>Notifications and Requests</h1>
            </div>
            <div className='mt-10 ml-10 flex gap-20 '>
                <div>
                <AdminCardnew name="atharva " cnr="MHT12345678"/>
                </div>
                <div className='border-[#3BAB99] border-2 w-[329px] h-[330px]'>
                    <div>
                    <h1 className='text-xl'>Atharva</h1>
                    <h1 className='admin_font'>MHT12345678</h1>
                    </div>
                   
                </div>
                
            </div>
            </div>
           
        </Admin>
    </div>
  )
}

export default Notification