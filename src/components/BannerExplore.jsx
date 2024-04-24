import React from "react";
import ExploreVideo from "../assets/explore.mp4";
import Explore1 from "../assets/explore1.jpg";
import Explore2 from "../assets/explore2.jpg";

function BannerExplore() {
  return (
    <div className="flex items-center justify-center h-[100vh] flex-col">
      <h1 className="p-[6px] text-7xl text-[#86868B] font-semibold">
        Explore the full story.
      </h1>
      <div>
        <p className="p-[10px] text-3xl mt-[20px] font-semibold">
          <span>iPhone</span>
          <br />
          Forged in titanium.
        </p>
      </div>
      <div>
        <div className="w-[1000px] h-[400px]">
          <video
            className="w-[100%] h-[100%] object-cover rounded-lg"
            src={ExploreVideo}
            loop
            autoPlay
            muted
          ></video>
        </div>
        <div className="flex justify-center mt-[6px] *:m-[6px]">
          <div className="w-[500px] h-[330px]">
            <img
              src={Explore1}
              className="w-[500px] h-[100%] object-cover rounded-lg"
              alt=""
            />
          </div>
          <div>
            <img src={Explore2} className="w-[500px] rounded-lg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerExplore;
