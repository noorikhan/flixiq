import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_BG, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignin, setSignin] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const toggleForm = () => {
    setSignin(!isSignin);
  };

  const handleValidation = () => {
    //validate the form data
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    // if(!message){
    //   if message is not there then do this
    // }

    if (message) return; // if message is there then return; means invalid credentials..

    if (!isSignin) {
      //signup logic

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  name: displayName,
                  profile: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //signin logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          //signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="object-cover h-screen" src={LOGIN_BG} alt="bg" />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute p-12 my-40 mx-5 md:mx-auto right-0 left-0  md:w-3/12 bg-black text-white bg-opacity-80"
      >
        <h1 className="my-2 font-bold text-3xl">
          {isSignin ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignin && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-2 my-2 w-full bg-gray-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-600"
        />
        <p className="text-lg text-red-500 font-medium py-2">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleValidation}
        >
          {isSignin ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-2 my-2 cursor-pointer" onClick={toggleForm}>
          {isSignin
            ? "New to Netflix? Sign Up Now."
            : "Already registerd? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
