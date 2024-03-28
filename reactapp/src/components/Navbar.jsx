import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logos/logo-green.png";

const Navbar = ({logged}) => {

  const navigate = useNavigate();
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    logged ? navigate("/dashboard") : navigate("/login") ;
  };

  return (
    <div className="w-full h-[90px] bg-green-950">

      <div className="max-w-[1240px] mx-auto px-4 flex justify-between items-center h-full">
        <div>
          <img className="w-[90px] rounded-lg" src={logo}/>
        </div>
        <div className="hidden md:flex text-green-400">
          <ul className="flex items-center">
            <div >
              <button onClick={()=> {handleNav()}} >Login | Signup</button>
            </div>
            
            <span className="px-4"></span>
            <button onClick={() => navigate("/about")}>About us</button>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
