import React from "react";
import ExploreVideo from "../assets/hightlight-third.mp4";

function BannerInfo() {
  return (
    <div className="flex justify-center text-center mt-[60px] flex-col">
      <h1 className="text-6xl font-semibold text-[#94928D] mb-[20px]">
        Get the highlights.
      </h1>
      <div className="w-full text-center flex justify-center mb-[81px]">
        <div className="w-[90%]">
          <video
            src={ExploreVideo}
            autoPlay
            loop
            muted
            className="rounded-lg"
          ></video>
        </div>
      </div>
    </div>
  );
}

export default BannerInfo;
