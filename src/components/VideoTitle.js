import { PlayIcon } from "@heroicons/react/20/solid";
import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12 text-white bg-gradient-to-b from-black w-full aspect-video py-44 absolute">
      <div>
        <p className="text-3xl font-bold">{title}</p>
        <p className="w-1/4 py-3">{overview}</p>
      </div>
      <div className="flex">
        <button className=" flex px-4 bg-red-500 text-black font-bold py-1 justify-center rounded-lg">
          <PlayIcon className="text-black w-6 h-9 pt-1" />
          <p className="pt-2 px-2">Play</p>
        </button>
        <button className="px-8 bg-white text-black font-bold py-3 rounded-lg mx-2">
          View
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
