import FrameTelf from "../assets/frame.png";
import Chip from "../assets/chip.jpeg";
import React from "react";

function BannerChip() {
  return (
    <div className="flex items-center justify-center flex-col bg-black h-[150vh] -z-50 mt-[20px]">
      <img src={Chip} alt="" />
      <h1 className="text-7xl *:block text-center font-semibold p-[5px]">
        <span>A17 Pro chip.</span>
        <span>A monster win for gaming.</span>
      </h1>
      <p className="p-[6px] opacity-50 font-semibold">
        It’s here. The biggest redesign in the history of Apple GPUs.
      </p>
      <div>
        <div>
          <img src={FrameTelf} alt="" width={800} />
        </div>
        <div className="flex items-center mt-[30px]">
          <div className="w-[400px] *:mt-[20px]">
            <p>
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span class="text-white">best graphics performance by far</span>.
            </p>
            <p>
              Mobile{" "}
              <span class="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and more realistic
              characters. And with industry-leading speed and efficiency, A17
              Pro takes fast and runs with it.
            </p>
          </div>
          <div className="ml-[60px] text-2xl font-semibold">
            <p className="opacity-50">New</p>
            <h1 className="text-3xl">Pro-class GPU</h1>
            <p className="opacity-50">With 6 Cores</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerChip;
