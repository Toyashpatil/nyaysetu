import React from 'react'

function AC({name,cnr}) {
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
            <div className='flex gap-4'>
            <button className=' shadow-lg h-[25px] w-[133px] rounded-md bg-[#41C0AB]'>
                Accept
            </button>
            <button className=' shadow-lg h-[25px] w-[133px] border border-solid border-[black] rounded-md bg-[#fff]'>
                Reject
            </button>
            </div>
        </div>
    </div>
</div>
    
  )
}

export default AC