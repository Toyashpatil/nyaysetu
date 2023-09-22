import React from 'react'

const Header = ({name}) => {
  return (
    <div className="bg-lightseagreen h-24 rounded-b-2xl max-w-screen shadow-[0px_4px_4px_rgba(0,_0,_0,_0.15)] flex items-center justify-evenly px-4">
        <div className="flex flex-row justify-start gap-x-6 items-center w-full">
            <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M12.5 24.25L3.75 15.5M3.75 15.5L12.5 6.75M3.75 15.5L26.25 15.5"
                stroke="#111827"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
            </svg>
            <div className="text-white">
                <div className="text-3xl font-semibold">Namaste,</div>
                <div className="text-gray text-xl font-medium">{name}</div>
            </div>
            
        </div>
        <div className="">
            <svg
                width="30"
                height="31"
                viewBox="0 0 30 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M12.9058 5.89664C13.4388 3.70112 16.5612 3.70112 17.0942 5.89664C17.4385 7.31491 19.0634 7.98797 20.3098 7.22856C22.2391 6.05299 24.447 8.26088 23.2714 10.1902C22.512 11.4366 23.1851 13.0615 24.6034 13.4058C26.7989 13.9388 26.7989 17.0612 24.6034 17.5942C23.1851 17.9385 22.512 19.5634 23.2714 20.8098C24.447 22.7391 22.2391 24.947 20.3098 23.7714C19.0634 23.012 17.4385 23.6851 17.0942 25.1034C16.5612 27.2989 13.4388 27.2989 12.9058 25.1034C12.5615 23.6851 10.9366 23.012 9.69023 23.7714C7.76088 24.947 5.55299 22.7391 6.72856 20.8098C7.48797 19.5634 6.81491 17.9385 5.39664 17.5942C3.20112 17.0612 3.20112 13.9388 5.39664 13.4058C6.81491 13.0615 7.48797 11.4366 6.72856 10.1902C5.55299 8.26088 7.76088 6.05299 9.69023 7.22856C10.9366 7.98797 12.5615 7.31491 12.9058 5.89664Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                <path
                    d="M18.75 15.5C18.75 17.5711 17.0711 19.25 15 19.25C12.9289 19.25 11.25 17.5711 11.25 15.5C11.25 13.4289 12.9289 11.75 15 11.75C17.0711 11.75 18.75 13.4289 18.75 15.5Z"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
                </svg>
        </div>

      </div>
  )
}

export default Header