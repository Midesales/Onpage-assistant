import React from 'react'
import layer from "../images/layer.png";
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
const handleClick = () =>{
    navigate('/record')
}

const handleHome = () => {
  navigate("/");
};

  return (
    <div className="bg-[#120B48] text-white px-24 py-10 hidden lg:flex items-center justify-between">
      <div className="flex gap-2 items-center">
        <img src={layer} alt="logo" />
        <p>HelpMeOut</p>
      </div>
      <div>
        <ul className="flex flex-col items-start gap-4">
          <button>
            <li className="font-semibold">Menu</li>
          </button>
          <button onClick={handleHome} className="hover:text-slate-500">
            <li>Home</li>
          </button>
          <button>
            <li>Converter</li>
          </button>
          <button>
            <li>How it Works</li>
          </button>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col items-start  gap-4">
          <button>
            <li className="font-semibold">About us</li>
          </button>
          <button>
            <li>About</li>
          </button>
          <button>
            <li>Contact us</li>
          </button>
          <button>
            <li>Privacy Policy</li>
          </button>
        </ul>
      </div>
      <div className="hover:cursor-pointer">
        <ul className="flex flex-col items-start  gap-4">
          <button onClick={handleClick} className="hover:text-slate-500">
            <li className="font-semibold">Screen Record</li>
          </button>
          <button>
            <li>Browser Window</li>
          </button>
          <button>
            <li>Desktop</li>
          </button>
          <button>
            <li>Application</li>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Footer