import React from 'react'
import Header from "../components/Header";
import CnrNumberCard from "../components/CnrNumberCard";
import Footer from "../components/Footer";
import Button from "../components/Button"
import Support from '../components/Support';

function Help() {
  return (
    <div>
        <Header name="Atharva Upare"/>
        <CnrNumberCard/>
        <div className="text-center mx-10 text-2xl text-lightseagreen font-semibold uppercase max-w-full h-6 ">
            HELP AND SUPPORT
        </div>
        <div className="erss mx-10 my-6  flex flex-col gap-4">
            <p className='text-center text-sm font-semibold'>Emergency Response Support System:</p>
            <p className='text-center text-sm text-lightseagreen font-medium'>ERSS is India's nationwide emergency response system, offering assistance from Police, Fire & Rescue, Health, and other services during emergencies.</p>
            <p className='text-center text-sm font-semibold'>Dial <span className='text-center text-sm text-lightseagreen font-medium'>112</span> from your phone.</p>
        </div>





        <div className="flex justify-center ">
        <Button className="fixed bottom-10 w-[80%] h-9 bg-lightseagreen">
          Connect to Lawyer
        </Button>
      </div>
      <div>
      <Support title="Vocational Training:" data="Many prisons in India provide vocational training programs to teach inmates skills such as carpentry, tailoring, and computer skills. " link="https://eventio.csikjsce.org"/>
      </div>
        <Footer/>
    </div>
  )
}

export default Help