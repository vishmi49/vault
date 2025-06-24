import React from "react";
import backgroundVideo from "../../assets/mainVideo.mp4";
import OverlayContent from "./OverlayContent";

const Main = () => {
  return (
    <section className="fixed top-0 left-0 w-screen h-screen overflow-hidden flex items-center justify-center">
      {/* Right green background – bottom layer */}
      <div className="absolute top-0 right-[25px] w-[50vw] h-screen bg-[#d8e7d2] z-0" />

      {/* Centered Content (video + text) */}
      <div className="relative z-10 flex items-center w-full h-full max-w-7xl mx-auto px-4">
        {/* Left Video: 60% width, 75% height */}
        <div className="relative w-[60%] h-0 pb-[56.25%] border-17 border-white shadow-lg ">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* Right Text: overlaps video slightly */}
        <div className="absolute left-[55%] -translate-x-[20%] z-20">
          <OverlayContent />
        </div>
      </div>
    </section>
  );
};

export default Main;
