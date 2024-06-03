import React from "react";
import PlayIcon from "@/components/svg/PlayIcon";

const CtaComponent = () => {
  return (
    <div className="flex-1 w-[100%] translate-y-[50%] md:-translate-y-[40%] md:max-w-[350px] mt-10 z-50">

      <div className="relative  md:mx-auto bg-white rounded-lg p-6">
        <img
          src="https://videodelivery.net/ed83ec0012330711ea783fabd47efdff/thumbnails/thumbnail.jpg"
          className="rounded-lg hidden md:block"
        />

        <PlayIcon />

        <input
          placeholder="Type your email..."
          type="text"
          className="text-[16px] my-2 border-2 border-gray-200 w-full rounded-lg placeholder:text-black placeholder:font-light placeholder:text-[14px] p-2 focus:ring-white"
        />
        <button className="bg-[#ff4742] text-white w-full p-2 rounded-lg">
          Go nomad --{" "}
        </button>
      </div>
    </div>
  );
};

export default CtaComponent;
