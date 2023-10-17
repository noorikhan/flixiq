import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { LANG_LIST, LOGO } from "../utils/constants";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { switchLanguage } from "../utils/configSlice";

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
      <div className="flex justify-between w-screen absolute z-10 px-2 py-2 bg-gradient-to-b from-black">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex p-2">
            {showGptSearch && (
              <div className="m-2">
                <select onChange={handleLanguage} className="px-4 py-2">
                  {LANG_LIST.map((lang) => (
                    <option key={lang.identifier} value={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            )}
            <button
              onClick={toggleGpt}
              className="text-white bg-purple-500 px-6 my-3 mx-6"
            >
              {showGptSearch ? "Home" : "Gpt Search"}
            </button>
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
