import React from "react";
import PlayIcon from "@/components/svg/PlayIcon";

const CtaComponent = () => {
  return (
    <div className="flex-auto">

      <div className="relative h-[320px] w-[50%] bg-white rounded-lg p-6">
        <img
          src="https://videodelivery.net/ed83ec0012330711ea783fabd47efdff/thumbnails/thumbnail.jpg"
          className="rounded-lg"
        />

        <PlayIcon />

        <input
          placeholder="Type your email..."
          type="text"
          className="text-[16px] my-2 border-2 border-gray-200 w-full rounded-lg placeholder:text-black placeholder:font-light placeholder:text-[16px] p-2 focus:ring-white"
        />
        <button className="bg-[#ff4742] text-white w-full p-2 rounded-lg">
          Go nomad --{" "}
        </button>
      </div>
    </div>
  );
};

export default CtaComponent;
