import React from 'react'
import Lady from "./assets/lady.png"
const Home = () => {
 
  return (
    <div className='main h-[100vh] bg-[#FFFAFA]'>
      <div className='lady h-[40vh] relative flex flex-row-reverse bg-[#41C0AB] overflow-hidden z-[2] '>
        <img src={Lady} className='img h-[111%] absolute right-[-100px] top-[-10%] overflow-x-hidden z-[-1]'></img>
      </div>
      <div className='login bg-[#FFFAFA] h-[50vh] flex items-center flex-col'>
        <p className='text-[1.5rem] not-italic font-semibold leading-[normal]'>Welcome</p>
        <form className='inputs  h-auto w-auto mt-4 inline-flex flex-col  items-start gap-6'>
          <div className='input1 flex flex-col items-start gap-1.5'>
            <p className='text-[1rem] not-italic font-medium leading-[normal]'>Username</p>
            <input placeholder='username' name='username' className='username lex w-[20.625rem] items-center border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] px-[0.3125rem] py-2 rounded-[0.3.25rem] border-solid border-[#41C0AB] bg-[#efefef]'></input>
          </div>
          <div className=' input2 flex flex-col justify-center items-start gap-[0.7rem]'>
            <p className='text-[1rem] not-italic font-medium leading-[normal]'>Designation</p>
            <div className='flex items-center gap-20'>
              <div className='forLawyer flex items-center gap-[0.56rem]'>
                <p className='text-[1rem] not-italic font-medium leading-[normal]'>Lawyer</p>
                <input className="lawyer border rounded-sm border-solid border-[#41C0AB]" type='checkbox' ></input>
              </div>
              <div className=' forUtp flex items-center gap-[0.9rem]'>
                <p className='text-[1rem] not-italic font-medium leading-[normal]'>Undertrial Prisoner</p>
                <input type='checkbox'className='utp border rounded-sm border-solid border-[#41C0AB]' ></input>
              </div>
              
            </div>

          </div>
          <div className='input3  flex flex-col items-start gap-1.5'>
          <p className='text-[1rem] not-italic font-medium leading-[normal]'>Enter CNR/Enrollment Number</p>
          <input className="number flex w-[20.625rem] items-center px-[0.3125rem] py-2 border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[0.325rem] border-solid border-[#41C0AB]" placeholder='CNR/Enrollment Number'></input>
          </div>
          <button type="submit" className='flex w-[20.625rem] justify-center items-center px-[0.3125rem] py-2  border shadow-[0px_4px_4px_0px_rgba(0,0,0,0.10)] rounded-[0.3125rem] border-solid border-[#41C0AB] bg-[#41C0AB]'>Continue</button>

        </form>
        
      </div>
    </div>
  )
}

export default Home