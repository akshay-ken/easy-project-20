import headerIcon from "../assets/images/logo.svg";
import bckImg from "../assets/images/illustration-dashboard.png";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

export function HomePage() {
  return (
    <>
      <main className="w-full my-28">
        <div className="max-w-sm mx-auto">
          <header className="flex justify-center">
            <img src={headerIcon} alt="" />
          </header>
          <h1 className="mt-12 mb-6 text-3xl text-center font-light text-Gray">
            We are launching
            <span className="text-Very-Dark-Blue font-extrabold"> soon!</span>
          </h1>
          <p className="text-center text-xl font-light">
            Subscribe and get notified
          </p>
          <div className="flex flex-col gap-y-6 my-10">
            <input
              type="text"
              placeholder="Your email address..."
              className="outline-2 outline-Gray p-4 rounded-full w-full placeholder:text-Gray placeholder:text-xl placeholder:px-6"
            />
            <button className="bg-Blue rounded-full text-2xl p-4 w-full text-white">
              Notify Me
            </button>
          </div>
          <div>
            <img src={bckImg} alt="" />
          </div>
          <footer className="flex flex-row justify-center my-12 gap-x-10">
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
