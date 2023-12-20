import React from 'react'

const Options = ({ img,text }) => {
    return (
        <div className=' flex items-center justify-center w-[180px] h-[172px]'>
            <div className=' items-center justify-center p-2 space-y-3'>
                <div className='ml-7'>
                    <img src={img}>

                    </img>
                </div>
                <div>
                    <button className='w-[160px] shadow-md h-[58px] rounded-lg border-2 border-[#41C0AB] '>
                        <p className=' option_fonts font-medium  text-lg '>{text}</p>
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Options