import React, { useEffect, useState } from "react";
import useTheme from "../../context/ThemContext";

const ToggleButton = () => {
  
  const {themeMode, lightMode, darkMode} = useTheme()
 const setMode =(e)=>{
  const isDarkMode = e.currentTarget.checked
  if(isDarkMode){
    darkMode()
  }else{
    lightMode()
  }
 }
  
  return (
    <>
      <label className="relative inline-flex items-center cursor-pointer float-right mt-4 mr-4">
        <input type="checkbox" value="" checked={themeMode==="dark"} onChange={setMode} className="sr-only peer"  />
        <div className="group peer ring-0  bg-gradient-to-bl from-neutral-800 via-neutral-700 to-neutral-600  rounded-full outline-none duration-1000 after:duration-300 w-20 h-8  shadow-md  peer-focus:outline-none  after:content-[''] after:rounded-full after:absolute after:[background:#0D2B39]   peer-checked:after:rotate-180 after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none after:h-6 after:w-6 after:top-1 after:left-1   peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900"></div>
      </label>
    </>
  );
};

export default ToggleButton;
