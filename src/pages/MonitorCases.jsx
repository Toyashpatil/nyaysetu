import React from 'react'
import Header from "../components/Header";
import CnrNumberCard from "../components/CnrNumberCard";
import Footer from "../components/Footer";
import Live from '../components/Live'
function MonitorCases() {
  return (
    <div>
        <Header name="Atharva Upare" />
        <CnrNumberCard />
        <div className="text-center mx-10 text-2xl text-lightseagreen font-semibold uppercase max-w-full h-6 ">
            Monitor Cases
        </div>
        <Live/>
        <div className='acts my-10 mx-6 '>
            <p className='text-base font-bold text-black'>Act:</p>
            <div className='  flex  '>
            <table className='w-[100%] h-[100px] my-[10px] border-3 border-solid border-lightseagreen'>
                <tr>
                    <th className='font-semibold'>Under Act(s)</th>
                    <th className='font-semibold'>Under Section(s)</th>
                </tr>
                <tr>
                    <td>CODE OF CIVIL PROCEDURE</td>
                    <td>151</td>
                </tr>
            </table>
            </div>
        </div>
        <div className='pastHearings my-10 mx-6 '>
            <p className='text-base font-bold text-black '>Past Hearings:</p>
            <div className='  flex  '>
            <table className='w-[100%] h-[100px] my-[10px] border-3 border-solid border-lightseagreen'>
                <tr>
                    <th className='font-semibold'>Date:</th>
                    <th className='font-semibold'>Purpose of Hearing:</th>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
            </table>
            </div>
        </div>
        <div className='futureHearings my-10 mx-6 '>
            <p className='text-base font-bold text-black'>Future Hearings:</p>
            <div className=' flex  '>
            <table className='w-[100%] h-[100px] my-[10px] border-3 border-solid border-lightseagreen'>
                <tr>
                    <th className='font-semibold'>Date:</th>
                    <th className='font-semibold'>Purpose of Hearing:</th>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
                <tr>
                    <td>14-01-2012</td>
                    <td>Steps Unready</td>
                </tr>
            </table>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default MonitorCases