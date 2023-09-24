// import React, { useState } from "react";

// function Sidebar({ items }) {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleActive = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <div style={{ display: "flex" }} className="">
//       <div
      
//         className="bg-lightseagreen min-w-[100px] justify-between flex flex-col gap-16"
//       >
//         <div className="flex flex-col items-center justify-between ">
//           <div className="w-full mt-16 flex justify-center items-center flex-col gap-16">
//             {items.map((item, index) => (
//               <div
//                 key={index}
//                 className={`w-full py-2 ${
//                   activeIndex === index ? "bg-[#3bab99]" : ""
//                 }`}
//                 onClick={() => toggleActive(index)}
//               >
//                 {item.svg}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="flex flex-col justify-end items-center pb-8">
//           <div className="bg-white h-1 my-3 mx-2 rounded-2xl w-[80%]"></div>
//           <div className="flex items-center justify-center relative">
//             <svg
//               width="40"
//               height="40"
//               viewBox="0 0 40 40"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//               className="absolute bottom-[-50px]"
//             >
//               <path
//                 d="M22.9167 33.3333L14.5833 24.9999M14.5833 24.9999L22.9167 16.6666M14.5833 24.9999L43.75 24.9999M33.3333 33.3333V35.4166C33.3333 38.8684 30.5351 41.6666 27.0833 41.6666H12.5C9.04822 41.6666 6.25 38.8684 6.25 35.4166V14.5833C6.25 11.1315 9.04822 8.33325 12.5 8.33325H27.0833C30.5351 8.33325 33.3333 11.1315 33.3333 14.5833V16.6666"
//                 stroke="white"
//                 stroke-width="4"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;


import React from 'react'
import Control from '../pages/assets/control.png'
import Logo from "../pages/assets/logo.png";
import Home from "../pages/assets/iconamoon_home.png";
import Connect from "../pages/assets/mdi_help-outline.png";
import Noti from "../pages/assets/tdesign_notification.png";
import Logout from "../pages/assets/logout.png";
import Profile from "../pages/assets/carbon_user.png";
function Sidebar() {
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVg6BSqSz7cZAg2kzQ8fhutXi_0hJmyrWkDb40hVlHreyHqNyXdJ1bxLEkf_Drua3Wj0&usqp=CAU";

  return (
    <div className="flex h-screen pt-[2rem] flex-col gap-[5rem] content-center items-center">
      <div className="w-20  bg-lightseagreen realative">
      <div className="rounded-full flex justify-center items-center overflow-hidden w-full">
              <img className="rounded-full  h-16 w-16 " src={imageUrl} />
            </div>
      </div>
      <div className='flex content-center justify-center items-center flex-col gap-12'>
        <div className='w-20 flex justify-center items-center rounded-md p-2 hover:bg-[#20908a]'>
          <img className='w-10' src={Home} alt="" />
        </div>
        <div className='w-20 flex justify-center items-center rounded-md p-2 hover:bg-[#20908a]'>
          <img className='w-10' src={Profile} alt="" />
        </div>
        <div className='w-20 flex justify-center items-center rounded-md p-2 hover:bg-[#20908a]'>
          <img className='w-10' src={Connect} alt="" />
        </div>
        <div className='w-20 flex justify-center items-center rounded-md p-2 hover:bg-[#20908a]'>
          <img className='w-10' src={Noti} alt="" />
        </div>
      </div>
      <div  className='w-20 flex justify-center items-center rounded-md p-2 hover:bg-[#20908a]'>
        <img className='w-10' src={Logout} alt="" />
      </div>

    </div>
  )
}

export default Sidebar