import React from 'react'
import logo from "../images/iCON 7 1.png";

function Header() {
  return (
    <div className="lg:flex px-24 pt-10 pb-6 items-center justify-between font-bold bg-white mb-2 hidden">
      <a href="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <p className="">HelpMeOut</p>
      </a>

      <div className="flex items-center gap-8">
        <a href="./#features">Features</a>
        <a href="./#works">How it works</a>
      </div>
      <div>
        <a href="/signup">Get started</a>
      </div>
    </div>
  );
}

export default Header