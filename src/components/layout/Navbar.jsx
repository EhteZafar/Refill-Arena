import React from "react";

const Navbar = () => {
  return (
    <div className="flex pt-4 pb-4 pl-20 navbar">
      <div className="pt-8">
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5H1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 1H1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 9H1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 13H1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 5H1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 1H1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 9H1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 13H1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="ml-8">
        <img src="company-logo.png" alt="company-logo" />
      </div>
      <div className="flex pl-10">
        <p className="text-white hover:text-yellow-400 pt-6 pl-8">
          Buy Gift Cards
        </p>
        <p className="text-white hover:text-yellow-400 pt-6 pl-8">Deals</p>
        <p className="text-white hover:text-yellow-400 pt-6 pl-8">Promotions</p>
        <p className="text-white hover:text-yellow-400 pt-6 pl-8">
          Buy with Bitcoin
        </p>
      </div>
      <div className="ml-auto pr-10">
        <div className="flex pt-4">
          <button className="bg-white font-bold py-2 px-4 rounded-md mr-2">
            Connect Wallet
          </button>
          <div className="relative inline-block group">
            <button className="bg-white font-bold py-2 px-4 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="#000"
                  strokeWidth="1.5"
                  d="M18 6.5h-5M18 9h-6M18 12h-4"
                ></path>
                <path
                  stroke="#000"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M1 17.125c0-9.5 12.5-9.5 12.5 0"
                ></path>
                <circle
                  cx="7.5"
                  cy="4.5"
                  r="3.75"
                  stroke="#000"
                  strokeWidth="1.5"
                ></circle>
              </svg>
            </button>
            <ul className="absolute z-10 right-0 mt-2 bg-white rounded-md shadow-lg hidden group-hover:block w-[180px]">
              <li className="px-4 py-2 hover:bg-gray-100 flex">
                <div className="pt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    fill="none"
                    viewBox="0 0 18 17"
                  >
                    <path
                      fill="#333365"
                      d="M7.5 7.5V5l4.167 3.333L7.5 11.667v-2.5H0V7.5h7.5zm-6.285 3.333h1.77a6.67 6.67 0 0012.848-2.5 6.666 6.666 0 00-12.848-2.5h-1.77a8.333 8.333 0 0116.285 2.5 8.333 8.333 0 01-16.285 2.5z"
                    ></path>
                  </svg>
                </div>
                <p className="pl-1">Login</p>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 flex">
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="24"
                    fill="none"
                    viewBox="0 0 17 24"
                  >
                    <path
                      stroke="#333365"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.563"
                      d="M9.599 17.421a5.4 5.4 0 00-1.563-.227H6.472A5.472 5.472 0 001 22.667"
                    ></path>
                    <path
                      stroke="#333365"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.675"
                      d="M12.217 20.392h3.35m-1.675-1.675v3.35m-6.7-13.4a4.188 4.188 0 100 8.375 4.188 4.188 0 000-8.376z"
                    ></path>
                  </svg>
                </div>
                <p className="pl-1 pt-1">Create Account</p>
              </li>
            </ul>
          </div>
          <button className="pl-6">
            <div className="pl-2 absolute top-14">
              <span class="absolute inset-0 object-right-top -mr-10">
                <div class="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-semibold leading-4 bg-red-700 text-white">
                  4
                </div>
              </span>
            </div>
            
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="23"
              fill="none"
              viewBox="0 0 24 23"
            >
              <path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 22a1 1 0 100-2 1 1 0 000 2zM20 22a1 1 0 100-2 1 1 0 000 2zM1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
