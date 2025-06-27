import React from "react";
import tshirtImage from "../../assets/images/tshirt1.jpeg";

const ServicesImage = () => {
  return (
    <div className="relative top-[10%] left-[47%] translate-x-[-20%] w-[80%] max-w-[600px] shadow-md z-10">
      <div className="max-w-[1000px] border-8 border-white shadow-md">
        <img
          src={tshirtImage}
          alt="T-shirt service visual"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default ServicesImage;
