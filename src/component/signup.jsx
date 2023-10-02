import React from "react";
import logo from "../images/iCON 7 1.png";
import google from "../images/Google svg.png";
import facebook from "../images/g10.png";

function Signup() {
  return (
    <div className="px-20 pt-20 pb-5 overflow-hidden">
      <div className="flex gap-2">
        <img src={logo} alt="logo" />
        <p className="font-bold">HelpMeOut</p>
      </div>
      <div className="flex flex-col justify-center items-center pt-10">
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-xl">Log in or Sign up</h2>
          <p className="max-w-xs text-center text-sm text-[#434343] p-2 pb-6">
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <button className="border border-[#141414] border-solid flex items-center justify-center gap-2 p-2 rounded-xl w-96">
            <img src={google} alt="google" />
            <p>Continue with Google</p>
          </button>
          <button className="border border-[#141414] border-solid flex items-center justify-center gap-2 p-2 rounded-xl w-96">
            <img src={facebook} alt="facebook" />
            <p>Continue with Facebook</p>
          </button>
        </div>
        <div className="pt-6 text-[#B9C2C8] flex items-center justify-center gap-4">
          <div className="border-t-2 border-[#B9C2C8] w-36"></div>
          <p>or</p>
          <div className="border-t-2 border-[#B9C2C8] w-36"></div>
        </div>
        <form className="flex flex-col pt-6">
          <div className=" flex flex-col gap-1 pb-2">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="text-[#626262] w-96 p-2 rounded-xl border-2 border-[#B6B3C6]"
            />
          </div>
          <div className=" flex flex-col gap-1">
            <label>Password</label>
            <input
              type="email"
              placeholder="Enter your password"
              className="text-[#626262] w-96 p-2 rounded-xl border-2 border-[#B6B3C6]"
            />
          </div>
          <button className="bg-[#120B48] text-white p-2 rounded-lg mt-4">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
