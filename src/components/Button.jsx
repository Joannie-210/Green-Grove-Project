import React from "react";

const Button = ({ text, onClick, variant = "primary", disabled = false, icon: Icon}) => {
    const baseStyles = "px-4 py-2 font-semibold rounded-full transition duration-300";
    
    const variants = {
      primary: "bg-green-600 w-auto px-2 h-10 text-white hover:opacity-70 transition duration-300 cursor-pointer",
      secondary: "w-auto px-2 h-10 bg-white text-black hover:text-white hover:bg-black transistion duration-300 cursor-pointer",
      gold: " h-12 bg-white w-62 border-2 border-gray-500 rounded-full text-black hover:bg-gray-200  hover:text-black hover:border-none cursor-pointer ",
      option: ' focus:text-black focus:border-black focus:border-3 hover:bg-gray-200 hover:text-black hover:border-none active:scale-95 h-14  mb-8 border-2 w-full border-purple-800 rounded-3xl flex items-center justify-start cursor-pointer ',
      build: "h-17 w-70 block mt-5 bg-purple-700 text-white text-xl hover:opacity-70 transition duration-300 cursor-pointer"
    };
  
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        onClick={onClick}
        disabled={disabled}
      >
          {Icon && <Icon className="w-6 h-6" />}
        {text}
      </button>
    );
  };
  
  export default Button;
  