import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignin, setSignin] = useState(true);

  const toggleForm = () => {
    setSignin(!isSignin);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ab180a27-b661-44d7-a6d9-940cb32f2f4a/7fb62e44-31fd-4e1f-b6ad-0b5c8c2a20ef/IN-en-20231009-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="bg"
        />
      </div>

      <form className="absolute p-12 my-40 mx-auto right-0 left-0 w-3/12 bg-black text-white bg-opacity-80">
        <h1 className="my-2 font-bold text-3xl">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-2 my-2 w-full bg-gray-600"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-600"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-600"
        />
        <button className="p-2 my-4 bg-red-700 w-full rounded-lg">
          {isSignin ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-2 my-2 cursor-pointer" onClick={toggleForm}>
          {isSignin
            ? "New to Netflix? Sign Up now."
            : "New to Netflix? Sign In now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
