import React, { useState } from "react";
import logo from "../images/iCON 7 1.png";

function Header() {
  const [showFeaturesTooltip, setShowFeaturesTooltip] = useState(false);
  const [showWorksTooltip, setShowWorksTooltip] = useState(false);
  const [showGetStartedTooltip, setShowGetStartedTooltip] = useState(false);

  return (
    <div className="lg:flex  px-24 pt-10 pb-6 items-center justify-between font-bold bg-white mb-2 hidden">
      <div className="flex items-center gap-2">
        <img src={logo} alt="logo" />
        <p className="">HelpMeOut</p>
      </div>

      <div className="flex items-center gap-8">
        <a
          href="./#features"
          onMouseEnter={() => setShowFeaturesTooltip(true)}
          onMouseLeave={() => setShowFeaturesTooltip(false)}
          className="relative"
        >
          Features
          {showFeaturesTooltip && (
            <div className="absolute bg-slate-200 z-10 text-[#120B48] right-0 -top-5 w-56 p-2  rounded-md m-5">
              Click to see the features of HelpMeOut
            </div>
          )}
        </a>
        <a
          href="./#works"
          className="relative"
          onMouseEnter={() => setShowWorksTooltip(true)}
          onMouseLeave={() => setShowWorksTooltip(false)}
        >
          How it works
          {showWorksTooltip && (
            <div className="absolute bg-slate-200 z-10 text-[#120B48] right-0 -top-5 w-56 p-2  rounded-md m-5">
              Click to see how HelpMeOut works
            </div>
          )}
        </a>
      </div>
      <div>
        <a
          href="/signup"
          className="relative"
          onMouseEnter={() => setShowGetStartedTooltip(true)}
          onMouseLeave={() => setShowGetStartedTooltip(false)}
        >
          Get started
          {showGetStartedTooltip && (
            <div className="absolute bg-slate-200 z-10 text-[#120B48] right-0 -top-5 w-56 p-2  rounded-md m-5">
              Click to signup or login
            </div>
          )}
        </a>
      </div>
    </div>
  );
}

export default Header;
