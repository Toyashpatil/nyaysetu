import React from 'react'

const AdminCard = ({name,cnr}) => {
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
                <div className='flex justify-center items-center '>
                    <div className='mb-6'>
                    <button className=' shadow-lg h-[25px] w-[133px] rounded-md bg-[#41C0AB]'>
                        More info
                    </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminCard