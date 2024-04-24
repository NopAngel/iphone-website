import VideoHero from "../assets/hero.mp4";
import React from "react";

function BannerMain() {
  return (
    <div className="flex items-center justify-center bg-black flex-col h-[100vh] text-center">
      <h1 className="font-semibold text-[#94928D] text-4xl">iPhone 15 Pro</h1>
      <div>
        <video src={VideoHero} autoPlay></video>
      </div>
      <div className="*:mb-[20px]">
        <button className="bg-[#2997FF] p-[6px] rounded-full hover:bg-transparent border-[1px] border-transparent hover:border-[#2997FF] w-[100px]">
          Buy
        </button>
        <p>From $199/month or $999</p>
      </div>
    </div>
  );
}

export default BannerMain;
