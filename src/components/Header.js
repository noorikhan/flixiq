import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { LANG_LIST, LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { switchLanguage } from "../utils/configSlice";
import {
  ArrowLeftOnRectangleIcon,
  HomeIcon,
  MagnifyingGlassCircleIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Dropdown from "./Dropdown";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            name: displayName,
            profile: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLanguage = (e) => {
    dispatch(switchLanguage(e.target.value));
  };

  const toggleGpt = () => {
    dispatch(toggleGptSearchView(showGptSearch));
  };

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div className="flex justify-between w-full absolute z-10 px-2 py-2 bg-gradient-to-b from-black">
        <img className="w-24 h-11 md:h-16 md:w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex p-2">
            {showGptSearch && (
              <div className="mx-2 md:m-2">
                {/* <Dropdown data={LANG_LIST} /> */}
                <select
                  onChange={handleLanguage}
                  className="md:px-4 md:py-2 px-1 py-1"
                >
                  {LANG_LIST.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <div onClick={toggleGpt}>
              {showGptSearch ? (
                <HomeIcon className="text-white md:h-11 md:w-12 h-8 w-8" />
              ) : (
                <MagnifyingGlassIcon className="text-white md:w-11 md:h-12 h-8 w-8" />
              )}
            </div>
            <UserCircleIcon className="hidden md:flex h-12 w-12 text-white" />

            <ArrowLeftOnRectangleIcon
              onClick={handleSignout}
              className="text-white h-8 w-8 md:h-12 md:w-12"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
