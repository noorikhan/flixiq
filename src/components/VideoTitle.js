import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="px-12 text-white bg-gradient-to-b from-black w-screen aspect-video py-44 absolute">
      <div>
        <p className="text-3xl font-bold">{title}</p>
        <p className="w-1/4 py-3">{overview}</p>
      </div>
      <div>
        <button className="px-8 bg-white text-black font-bold py-3 rounded-lg">
          Play
        </button>
        <button className="px-8 bg-slate-500 text-black font-bold py-3 rounded-lg mx-2">
          View
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
