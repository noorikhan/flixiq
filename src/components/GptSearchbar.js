import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchbar = () => {
  const langKey = useSelector((store) => store.config?.lang);

  return (
    <div>
      <form className="pt-[20%] ms-[30%]">
        <input
          className="px-6 py-2 text-2xl w-96"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="text-2xl bg-red-500 px-6 py-2 ">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchbar;
