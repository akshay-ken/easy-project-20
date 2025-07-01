import headerIcon from "../assets/images/logo.svg";
import bckImg from "../assets/images/illustration-dashboard.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { useRef, useState } from "react";
import clsx from "clsx";

export function HomePage() {
  const emailRef = useRef("");
  const [emailError, setEmailError] = useState(false);

  function handleSubmit() {
    const emailId = emailRef.current.value;
    if (!(emailId.includes("@") && emailId.includes("."))) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  }

  const baseClass = clsx(
    "outline-2 outline-Gray p-4 rounded-full w-full md:max-w-4/6 placeholder:text-Gray placeholder:text-xl placeholder:px-6",
    { "outline-Light-Red outline-4": emailError }
  );
  return (
    <>
      <main className="w-full my-28">
        <div className="max-w-sm mx-auto md:max-w-2xl">
          <header className="flex justify-center">
            <img src={headerIcon} alt="" />
          </header>
          <h1 className="mt-12 mb-6 text-3xl md:text-5xl text-center font-light text-Gray">
            We are launching
            <span className="text-Very-Dark-Blue font-extrabold"> soon!</span>
          </h1>
          <p className="text-center text-xl font-light">
            Subscribe and get notified
          </p>
          <div className="flex flex-col md:flex-row gap-y-6 md:gap-x-6 my-10">
            <input
              type="text"
              ref={emailRef}
              placeholder="Your email address..."
              className={baseClass}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-Blue rounded-full text-2xl p-4 w-full md:max-w-2/6 text-white"
            >
              Notify Me
            </button>
          </div>
          {emailError ? (
            <p className="md:-mt-10 text-sm ml-10 font-bold text-Light-Red md:mb-10 -mt-31 mb-30">
              Please provide valid email address
            </p>
          ) : null}

          <div>
            <img src={bckImg} alt="" />
          </div>
          <footer className="flex flex-row justify-center my-12 gap-x-10 md:scale-50">
            <TiSocialFacebook className="size-12 rounded-full fill-Blue ring-Gray ring-offset-8 ring-2" />
            <TiSocialTwitter className="size-12 rounded-full fill-Blue ring-Gray ring-2 ring-offset-8" />
            <FaInstagram className="size-12 rounded-full fill-Blue ring-Gray ring-2 ring-offset-8" />
          </footer>
          <p className="text-sm text-center text-Gray mt-12">
            &copy; Copyright Ping. All rights reserved.
          </p>
        </div>
      </main>
    </>
  );
}
