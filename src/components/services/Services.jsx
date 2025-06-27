import React from "react";
import inkSpray from "../../assets/images/ink1.svg";
import ServicesImage from "./ServicesBgImage";
import ServicesContent from "./ServicesContent";

const Services = () => {
  return (
    <section
      id="our-services"
      className="relative top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-between"
    >
      {/* Gray left half background */}
      <div className="absolute left-[25px] top-0 w-[48vw] h-screen bg-[#E9E6E6] -z-10" />

      {/* Ink spray graphic */}
      <img
        src={inkSpray}
        alt="Ink spray"
        className="absolute right-20 top-10 w-30 md:w-28 z-10"
      />

      {/* Image */}
      <div className="relative top-0 w-full md:w-[70%]">
        <ServicesImage />
      </div>

      {/* Text content */}
      <ServicesContent />
    </section>
  );
};

export default Services;
