import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { Truck } from 'lucide-react';

const Header = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (input) navigate(`/${input}`);
  };

  return (
    <>
      <Navbar />
      <div className="text-center bg-blue-500 bg-cover bg-center">
        <div className="mask bg-[rgba(0,0,0,0.6)]">
          <div className="flex items-center min-h-[300px] justify-center">
            <div className="text-white my-auto">
              <div className="expText flex flex-row gap-5 relative z-20 justify-center mb-4">
                <div className="header-logo">
                  <Truck className="size-[80%]" />
                </div>
                <h2 className="font-semibold text-2xl">reviewerName</h2>
              </div>
              <h4 className="mb-3 sm:w-[60%] mx-auto px-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id ullam dicta magni deserunt ipsa doloremque.
              </h4>
              <form
                onSubmit={handleSearch}
                className="flex text-black items-center border w-80 focus-within:border-indigo-500 transition duration-300 pr-3 gap-2 bg-white border-gray-500/30 h-[46px] rounded-[5px] overflow-hidden mx-auto"
              >
                <input
                  type="text"
                  placeholder="Enter Tracking ID"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full h-full pl-4 outline-none placeholder-gray-500 text-sm"
                />
                <button type="submit" className="top-3 right-3" aria-label="Search">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 30 30"
                    className="fill-gray-500 hover:fill-black transition-colors"
                  >
                    <path d="M 13 3 C 7.48 3 3 7.49 3 13 C 3 18.51 7.49 23 13 23 C 15.39 23 17.6 22.15 19.32 20.74 L 25.29 26.71 A 1 1 0 1 0 26.71 25.29 L 20.74 19.32 C 22.15 17.6 23 15.39 23 13 C 23 7.49 18.51 3 13 3 Z M 13 5 C 17.43 5 21 8.57 21 13 C 21 17.43 17.43 21 13 21 C 8.57 21 5 17.43 5 13 C 5 8.57 8.57 5 13 5 Z" />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
