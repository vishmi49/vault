// src/components/banner/OverlayContent.jsx
import React from "react";

const OverlayContent = () => {
  return (
    <div className="bg-[#f3f3f3] border-8 border-white p-8 max-w-sm shadow-xl">
      <h2 className="text-gray-900 font-poppins text-3xl md:text-5xl font-semibold leading-tight mb-4">
        WE PRINT <br />
        THE VISION <br />
        YOU WEAR
      </h2>
      <p className="text-gray-700 text-sm md:text-base mb-6">
        Customize your brand, team, or event with style.
      </p>
      <button className="text-sm md:text-base text-black font-medium border-b border-black hover:opacity-80 transition">
        Start Your Order →
      </button>
    </div>
  );
};
export default OverlayContent;
