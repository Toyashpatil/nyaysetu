import React, { useContext } from 'react'
import RectangleImg from "../pages/assets/rectangleimg.jpg"
import AuthContext from '../context/authContext'


const CnrNumberCard = ({cnr,caseStats}) => {

    const {prisoner}=useContext(AuthContext);
  return (
    <div className="relative my-10 mx-6">
    <div className="border border-lightseagreen inset rounded-2xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden">
        <img className="w-full h-32 object-cover opacity-[0.10] " src={RectangleImg}></img>
    </div>
    <div className="absolute top-0 left-0 p-4">
        <div className="flex flex-col gap-2">
            <div className="text-base font-bold text-black">CNR Number, </div>
            <div className="text-lightseagreen font-semibold text-2xl">{prisoner.veriNum}</div>   
            <div className="flex flex-row gap-2">
                <span className="text-black font-bold">Case Status: </span>
                <span className="text-lightseagreen font-semibold">{prisoner.caseStatus} </span>
            </div>
        </div> 
    </div>
  </div>
  )
}

export default CnrNumberCard
