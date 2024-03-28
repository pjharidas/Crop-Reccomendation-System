import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  BarChart2,
  Pencil,
  HelpCircleIcon,
  LogOutIcon
} from "lucide-react"
import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();

const navLinks = [
  {
    id: 0,
    name: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    name: "Predict",
    icon: BarChart2,
  },
  {
    id: 3,
    name: "Edit Info",
    icon: Pencil,
  },
  {
    id: 4,
    name: "Help Centre",
    icon: HelpCircleIcon,
  },
];

const variants = {
  expanded: { width: "20%" },
  nonExpanded: { width: "5%" },
};

export const Menu = ({selection, setSelection}) => {
  const navigate = useNavigate();

  const [activeNavIndex, setActiveNavIndex] = useState(selection);
  const [isExpanded, setIsExpanded] = useState(true);

  const onLogout = () => {
    // write code for logout and clear local data as well
    localStorage.clear();

    signOut(auth).then(() => {
      navigate("/");
      console.log("Signed out successfully")
    }).catch((error) => {
      console.log("error in logging out")
    })

  }

  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonExpanded"}
      variants={variants}
      className={
        "py-12 flex flex-col border-2 border-r-1 w-1/5 h-auto relative " +
        (isExpanded ? "px-10" : "px-2")
      }
    >
      <div className="logo-div flex space-x-3 items-center">
        <img src="./src/assets/logos/ks-logo.png" />
        <span className={isExpanded ? "block" : "hidden"}></span>
      </div>

      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-5 h-5 bg-[#1c961c] rounded-full absolute -right-[10.5px] top-15 flex items-center justify-center"
      >
        <img src="./src/assets/icons/rightArrow.svg" className="width-[5px]" />
      </div>

      <div className="mt-10 flex flex-col space-y-8">
        {navLinks.map((item, index) => (
          <div
            key={index}
            className={
              "flex space-x-3 p-2 rounded" +
              (activeNavIndex === index
                ? " bg-[#1c961c] text-white font-semibold"
                : " ")
            }
            onClick={() => {
              setActiveNavIndex(index);
              setSelection(index);
              
            }}
          >
            <item.icon />
            <span className={isExpanded ? "block" : "hidden"}>{item?.name}</span>
          </div>
        ))}
        
        <button onClick={()=> {onLogout()}}
          className="flex space-x-3 p-2 rounded border justify-center border-green-600">
          <LogOutIcon/>
          <span className={isExpanded ? "block" : "hidden"}>LOGOUT</span>
        </button>

      </div>
    </motion.div>
  );
};