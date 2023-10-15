import { signOut } from "firebase/auth";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="flex justify-between w-screen absolute z-10 px-2 py-2 bg-gradient-to-b from-black">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
        {user && (
          <div className="flex p-2">
            <img className="w-12 h-12" src={user?.profile} alt="profile pic" />
            <button onClick={handleSignout} className="font-bold text-red-800">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
