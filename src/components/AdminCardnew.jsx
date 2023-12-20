import React from 'react'

const AdminCardnew = ({ name, cnr }) => {
    return (
        <div className='shadow-lg h-[113px] w-[329px] rounded-md border-[#41C0AB] border-2 '>
            <div className='p-2 space-y-3 ' >
                <div>
                    <h1 className='font-bold'>
                        {name}
                    </h1>
                </div>
                <div>
                    <h1 className='admin_font'>
                        {cnr}
                    </h1>
                </div>
                <div>
                    <h1 className='font-bold'>Requested to connect</h1>
                </div>
                <div className='flex gap-5 justify-center items-center '>
                    <div>
                        <button className=' shadow-lg h-[25px] w-[133px] rounded-md bg-[#41C0AB]'>
                            Accept
                        </button>
                    </div>
                    <div>
                        <button className=' shadow-lg h-[25px] w-[133px] rounded-md bg-[#41C0AB]'>
                            reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCardnew