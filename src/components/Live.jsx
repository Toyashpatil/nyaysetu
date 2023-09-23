import React from 'react'
import RectangleImg from "../pages/assets/rectangleimg.jpg"
function live() {
  return (
    <div>
        <div className="relative my-10 mx-6 ">
    <div className="border border-lightseagreen  inset rounded-2xl shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] overflow-hidden">
        <img className="w-full h-[16rem]  object-cover opacity-[0.10] " src={RectangleImg}></img>
    </div>
    <div className="absolute top-0 left-0 p-4">
        <div className="flex flex-col gap-1">
            <div className="text-base font-bold text-black">CNR Number, </div>
            <div className="text-lightseagreen font-semibold text-lg">XXXX XXXX XXXX XXXX</div>   
            <div className="flex gap-2">
                <span className="text-black  text-base font-bold leading-[normal]">Upcoming Hearing: </span>
                <span className="text-lightseagreen text-base font-semibold">05-03-2012, Proclomation </span>
            </div>
            <div className="flex gap-2">
                <span className="text-black text-base font-bold">Court: </span>
                <span className="text-lightseagreen text-base font-semibold">Link Court Of CIVIL 
JUDGE S.D. BHIWANDI </span>
            </div>
            <div className="flex gap-2">
                <span className="text-black text-base font-bold">Appointed Lawyer: </span>
                <span className="text-lightseagreen text-base font-semibold">Adv. Atharva Upare </span>
            </div>
            <div className="flex gap-2">
                <span className="text-black text-base font-bold">Case Status: </span>
                <span className="text-lightseagreen text-base font-semibold">Pending</span>
            </div>

        </div> 
    </div>
  </div>
    </div>
  )
}

export default live