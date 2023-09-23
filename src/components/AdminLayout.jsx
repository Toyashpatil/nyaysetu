import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Logo from "../pages/assets/logo.png";

const Admin = ({ children, className }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login/");
    }
  }, []);

  const [isActive, setisActive] = useState(false);
  const toggleActive = (index) => {
    if (isActive === index) {
      setisActive(null); // If the clicked div is already active, deactivate it.
    } else {
      setisActive(index); // Activate the clicked div.
    }
  };

  const divs = [
    {
      svg: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-full"
        >
          <path
            d="M41.6667 20.8333C41.6667 20.2808 41.4472 19.7509 41.0565 19.3602C40.6658 18.9695 40.1359 18.75 39.5834 18.75C39.0308 18.75 38.5009 18.9695 38.1102 19.3602C37.7195 19.7509 37.5 20.2808 37.5 20.8333H41.6667ZM12.5 20.8333C12.5 20.2808 12.2806 19.7509 11.8899 19.3602C11.4992 18.9695 10.9692 18.75 10.4167 18.75C9.86418 18.75 9.33427 18.9695 8.94357 19.3602C8.55287 19.7509 8.33338 20.2808 8.33338 20.8333H12.5ZM42.2771 26.4729C42.67 26.8524 43.1963 27.0624 43.7425 27.0577C44.2888 27.0529 44.8113 26.8338 45.1976 26.4475C45.5838 26.0613 45.803 25.5387 45.8077 24.9925C45.8124 24.4463 45.6025 23.92 45.223 23.5271L42.2771 26.4729ZM25 6.25L26.473 4.77709C26.0823 4.38652 25.5525 4.16711 25 4.16711C24.4476 4.16711 23.9178 4.38652 23.5271 4.77709L25 6.25ZM4.77713 23.5271C4.57815 23.7193 4.41944 23.9492 4.31025 24.2033C4.20107 24.4575 4.1436 24.7309 4.14119 25.0075C4.13879 25.2841 4.1915 25.5585 4.29625 25.8145C4.401 26.0705 4.5557 26.3031 4.75131 26.4987C4.94692 26.6944 5.17953 26.849 5.43556 26.9538C5.69159 27.0585 5.96593 27.1113 6.24255 27.1089C6.51917 27.1065 6.79255 27.049 7.04672 26.9398C7.3009 26.8306 7.53078 26.6719 7.72296 26.4729L4.77713 23.5271ZM14.5834 45.8333H35.4167V41.6667H14.5834V45.8333ZM41.6667 39.5833V20.8333H37.5V39.5833H41.6667ZM12.5 39.5833V20.8333H8.33338V39.5833H12.5ZM45.223 23.5271L26.473 4.77709L23.5271 7.72292L42.2771 26.4729L45.223 23.5271ZM23.5271 4.77709L4.77713 23.5271L7.72296 26.4729L26.473 7.72292L23.5271 4.77709ZM35.4167 45.8333C37.0743 45.8333 38.664 45.1749 39.8361 44.0028C41.0082 42.8307 41.6667 41.2409 41.6667 39.5833H37.5C37.5 40.1359 37.2805 40.6658 36.8899 41.0565C36.4991 41.4472 35.9692 41.6667 35.4167 41.6667V45.8333ZM14.5834 41.6667C14.0308 41.6667 13.5009 41.4472 13.1102 41.0565C12.7195 40.6658 12.5 40.1359 12.5 39.5833H8.33338C8.33338 41.2409 8.99186 42.8307 10.164 44.0028C11.3361 45.1749 12.9258 45.8333 14.5834 45.8333V41.6667Z"
            fill="white"
          />
        </svg>
      ),
      isActive: isActive === 0,
    },
    {
      svg: (
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-full"
        >
          <path
            d="M22 5.5C23.3597 5.5 24.689 5.90321 25.8195 6.65865C26.9501 7.41408 27.8313 8.48781 28.3517 9.74405C28.872 11.0003 29.0082 12.3826 28.7429 13.7162C28.4776 15.0499 27.8228 16.2749 26.8614 17.2364C25.8999 18.1978 24.6749 18.8526 23.3412 19.1179C22.0076 19.3832 20.6253 19.247 19.3691 18.7267C18.1128 18.2063 17.0391 17.3251 16.2836 16.1945C15.5282 15.064 15.125 13.7347 15.125 12.375C15.125 10.5516 15.8493 8.80295 17.1386 7.51364C18.428 6.22433 20.1766 5.5 22 5.5ZM22 2.75C20.0964 2.75 18.2355 3.3145 16.6526 4.37211C15.0698 5.42971 13.8362 6.93293 13.1077 8.69167C12.3792 10.4504 12.1886 12.3857 12.5599 14.2527C12.9313 16.1198 13.848 17.8348 15.1941 19.1809C16.5402 20.527 18.2552 21.4437 20.1223 21.8151C21.9893 22.1864 23.9246 21.9958 25.6833 21.2673C27.4421 20.5388 28.9453 19.3052 30.0029 17.7224C31.0605 16.1395 31.625 14.2786 31.625 12.375C31.625 9.82229 30.6109 7.37413 28.8059 5.5691C27.0009 3.76406 24.5527 2.75 22 2.75ZM35.75 41.25H33V34.375C33 33.4722 32.8222 32.5782 32.4767 31.7441C32.1312 30.9099 31.6248 30.152 30.9864 29.5136C30.348 28.8752 29.5901 28.3688 28.7559 28.0233C27.9218 27.6778 27.0278 27.5 26.125 27.5H17.875C16.0516 27.5 14.303 28.2243 13.0136 29.5136C11.7243 30.803 11 32.5516 11 34.375V41.25H8.25V34.375C8.25 31.8223 9.26406 29.3741 11.0691 27.5691C12.8741 25.7641 15.3223 24.75 17.875 24.75H26.125C28.6777 24.75 31.1259 25.7641 32.9309 27.5691C34.7359 29.3741 35.75 31.8223 35.75 34.375V41.25Z"
            fill="white"
            stroke="white"
          />
        </svg>
      ),
      isActive: isActive === 1,
    },
    {
      svg: (
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-full"
        >
          <path
            d="M45.2292 18.1458C47.8333 15.5417 46.6458 12.5 45.2292 11.0208L38.9792 4.77083C36.3542 2.16666 33.3333 3.35416 31.8542 4.77083L28.3125 8.33333H22.9167C18.9583 8.33333 16.6667 10.4167 15.5 12.8125L6.24999 22.0625V30.3958L4.77083 31.8542C2.16666 34.4792 3.35416 37.5 4.77083 38.9792L11.0208 45.2292C12.1458 46.3542 13.3542 46.7708 14.5 46.7708C15.9792 46.7708 17.3333 46.0417 18.1458 45.2292L23.7708 39.5833H31.25C34.7917 39.5833 36.5833 37.375 37.2292 35.2083C39.5833 34.5833 40.875 32.7917 41.3958 31.0417C44.625 30.2083 45.8333 27.1458 45.8333 25V18.75H44.6042L45.2292 18.1458ZM41.6667 25C41.6667 25.9375 41.2708 27.0833 39.5833 27.0833H37.5V29.1667C37.5 30.1042 37.1042 31.25 35.4167 31.25H33.3333V33.3333C33.3333 34.2708 32.9375 35.4167 31.25 35.4167H22.0625L15.2292 42.25C14.5833 42.8542 14.2083 42.5 13.9792 42.2708L7.74999 36.0625C7.14583 35.4167 7.49999 35.0417 7.72916 34.8125L10.4167 32.1042V23.7708L14.5833 19.6042V22.9167C14.5833 25.4375 16.25 29.1667 20.8333 29.1667C25.4167 29.1667 27.0833 25.4375 27.0833 22.9167H41.6667V25ZM42.2708 15.1875L38.7292 18.75H22.9167V22.9167C22.9167 23.8542 22.5208 25 20.8333 25C19.1458 25 18.75 23.8542 18.75 22.9167V16.6667C18.75 15.7083 19.1042 12.5 22.9167 12.5H30.0208L34.7708 7.74999C35.4167 7.14583 35.7917 7.49999 36.0208 7.72916L42.25 13.9375C42.8542 14.5833 42.5 14.9583 42.2708 15.1875Z"
            fill="white"
          />
        </svg>
      ),
      isActive: isActive === 2,
    },
    {
      svg: (
        <svg
          width="46"
          height="45"
          viewBox="0 0 46 45"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-full"
        >
          <path
            d="M8 15C8 11.0218 9.58035 7.20644 12.3934 4.3934C15.2064 1.58035 19.0218 0 23 0C26.9782 0 30.7936 1.58035 33.6066 4.3934C36.4196 7.20644 38 11.0218 38 15V23.8069L41.75 29.4319V37.5H31.2294C30.8029 39.3632 29.7567 41.0265 28.2619 42.2178C26.7671 43.4091 24.9123 44.0578 23.0009 44.0578C21.0895 44.0578 19.2347 43.4091 17.74 42.2178C16.2452 41.0265 15.199 39.3632 14.7725 37.5H4.25V29.4319L8 23.8069V15ZM18.7025 37.5C19.067 38.3367 19.6678 39.0488 20.4312 39.549C21.1946 40.0491 22.0874 40.3156 23 40.3156C23.9126 40.3156 24.8054 40.0491 25.5688 39.549C26.3322 39.0488 26.933 38.3367 27.2975 37.5H18.7025ZM23 3.75C20.0163 3.75 17.1548 4.93526 15.045 7.04505C12.9353 9.15483 11.75 12.0163 11.75 15V24.9431L8 30.5681V33.75H38V30.5681L34.25 24.9431V15C34.25 12.0163 33.0647 9.15483 30.955 7.04505C28.8452 4.93526 25.9837 3.75 23 3.75Z"
            fill="white"
          />
        </svg>
      ),
      isActive: isActive === 3,
    },
  ];

  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVg6BSqSz7cZAg2kzQ8fhutXi_0hJmyrWkDb40hVlHreyHqNyXdJ1bxLEkf_Drua3Wj0&usqp=CAU";

  return (
    <div style={{ display: "flex" }} className="max-h-full   ">
      <div
  
        className="bg-lightseagreen min-w-[100px] justify-between flex flex-col min-h-screen"
      >
        <div className="flex flex-col items-center">
          <div className="pt-24">
            <div className="bg-white rounded-full">
              <img src={imageUrl} className="p-1 h-16 w-16 rounded-full z-10" />
            </div>
          </div>

          <Sidebar items={divs} />
        </div>
      </div>
      <div style={{ flex: 93 }}>
        <div className="flex flex-row items-center justify-between mx-16">
          <div className="flex flex-row px-8 py-4 gap-8 items-center">
            <div className="rounded-full overflow-hidden h-28 w-28">
              <img src={imageUrl} />
            </div>
            <div className="text-4xl font font-semibold">
              <div className="inline-block w-96">Namaste</div>
              <div className="text-lightseagreen">Atharva Upare</div>
            </div>
          </div>
          <div className="h-max w-48">
            <div className="h-max max-w-48">
              <img
                src={Logo}
                alt="logo"
                className="drop-shadow-xl"
              />
            </div>
          </div>
       
        </div>
        <div className="h-1 w-[90%] mx-auto rounded-full bg-lightseagreen">

        </div>
        <div className={className}>
        {children}

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
