import React, {useEffect, useState, useRef} from "react";
import { gsap } from "gsap";
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.png";
import grid from "../images/grid.png";
import repo from "../images/Video-Repository.png";
import holderone from '../images/holder1.png'
import holdertwo from '../images/holder2.png'
import holderthree from "../images/holder3.png";
import one from '../images/Icon8.png'
import two from "../images/icon9.png";
import three from "../images/icon10.png";
import record from '../images/record.png'
import Header from "./header";
import Footer from "./footer";
import toggle from "../images/_Toggle base.png";
import animated from "../images/animated.gif";

function Landingpage() {

 const [showTooltip, setShowTooltip] = useState(false);

 useEffect(() => {
   const movingImage = document.querySelector("#moving-image");
   const offset = { x: 200, y: 450 };

   const moveImage = (event) => {
     // Get the mouse position
     const mouseX = event.clientX;
     const mouseY = event.clientY;

     gsap.to(movingImage, {
       duration: 0.2,
       x: mouseX - offset.x,
       y: mouseY - offset.y,
       
     });
   };

   const resetImage = () => {
     gsap.to(movingImage, {
       duration: 0.2,
       x: 0, // Set the x position to 0
       y: 0, // Set the y position to 0
       
     });
   };

   document.addEventListener("mousemove", moveImage);
   document.addEventListener("mouseleave", resetImage);

   return () => {
     document.removeEventListener("mousemove", moveImage);
     document.removeEventListener("mouseleave", resetImage);
   };
 }, []);

  return (
    <section className="lg:bg-gray-200 relative">
      <Header />
      <div className="flex px-24 py-24 gap-24 bg-white mb-8">
        <div className="flex flex-col items-start justify-center">
          <h2 className="flex flex-col font-bold text-xl lg:text-6xl">
            Show Them
            <span>Don’t Just Tell </span>
          </h2>
          <p className="flex flex-col pt-6">
            Help your friends and loved ones by creating and sending{" "}
            <span> videos on how to get things done on a website.</span>
          </p>

          <a
            href="https://drive.google.com/drive/folders/17Frnnf5cLAHyXHJsJ1LCwMzrnrF-dd3O?usp=drive_link"
            target="_blank"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            className="bg-[#120B48] text-white p-4 relative rounded-lg mt-6 hidden lg:block text-center text-decoration-none"
          >
            Install HelpMeOut &#8594;{" "}
            {showTooltip && (
              <div className="absolute z-10 bg-slate-200 text-[#120B48] right-0 -top-5 w-56 p-2  rounded-md m-5">
                Click to install HelpMeOut
              </div>
            )}
          </a>
        </div>

        {/* LARGE SCREENS */}
        <div className=" hidden lg:flex items-center justify-between gap-5">
          <div className="flex flex-col gap-5 relative">
            <img src={first} alt="first" className="rounded-lg" />
            <img src={second} alt="second" className="rounded-lg z-10" />
            <div className="absolute -bottom-16 -left-12">
              <img src={grid} alt="grid" />
            </div>
          </div>
          <div className="relative">
            <img src={third} alt="third" className="rounded-lg z-10" />
            <div className="absolute -top-16 -right-12">
              <img src={grid} alt="grid" />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE SCREENS */}
      <div className="lg:hidden px-10 flex flex-col gap-3 max-w-xl">
        <div className="flex justify-between items-center border-2 font-bold rounded-lg p-2">
          Show camera
          <img src={toggle} alt="toggle" />
        </div>
        <div className="flex justify-between items-center border-2 font-bold rounded-lg p-2">
          Record screen
          <img src={toggle} alt="toggle" />
        </div>
        <div className="flex justify-between items-center border-2 font-bold rounded-lg p-2">
          Record audio
          <img src={toggle} alt="toggle" />
        </div>
        <div className="flex flex-col gap-2">
          <label>Who would you like to send to?</label>
          <input
            type="text"
            placeholder="johnmark@gmail.com"
            className="outline-none rounded-xl px-2 py-1 border-2 w-96"
          />
        </div>
        <div className="flex justify-end pt-24">
          <button className="bg-[#120B48] text-white p-2 rounded-lg mt-6 lg:hidden text-center text-decoration-none">
            Start recording
          </button>
        </div>
      </div>

      <div id="features" className="bg-white px-24 py-10 mb-8 hidden lg:block">
        <div className=" text-center py-10">
          <p className="font-bold text-xl">Features</p>
          <p className="text-sm pt-2">Key Highlights of Our Extension</p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-6 pt-10">
            <div className="flex gap-3 items-start">
              <img src={holderone} alt="holderone" />
              <div>
                <p className="font-bold text-lg">Simple Screen Recording</p>
                <p className="flex flex-col">
                  Effortless screen recording for everyone. Record
                  <span> with ease, no tech expertise required.</span>
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <img src={holdertwo} alt="holdertwo" />
              <div>
                <p className="font-bold text-lg">Easy-to-Share URL</p>
                <p className="flex flex-col">
                  Share your recordings instantly with a single link.
                  <span> No attachments, no downloads.</span>
                </p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <img src={holderthree} alt="holderthree" />
              <div>
                <p className="font-bold text-lg">Revisit Recordings</p>
                <p className="flex flex-col">
                  Access and review your past content effortlessly.
                  <span> Your recordings, always at your fingertips.</span>
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={repo} alt="repository" />
          </div>
        </div>
      </div>
      <div id="works" className="bg-white px-24 pb-14 hidden lg:block">
        <div className=" text-center py-10">
          <p className="font-bold text-xl">How it works</p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col items-center gap-3">
            <img src={one} alt="one" />
            <h5 className="font-bold text-xl">Record Screen</h5>
            <p className="text-center">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
            <img src={record} alt="record" />
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={two} alt="two" />
            <h5 className="font-bold text-xl">Share Your Recording</h5>
            <p>
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
            <img src={record} alt="record" />
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={three} alt="three" />
            <h5 className="font-bold text-xl">Learn Effortlessly</h5>
            <p>
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
            <img src={record} alt="record" />
          </div>
        </div>
      </div>
      <Footer />
      <div className="hidden lg:block fixed bottom-0 left-0">
        <img
          id="moving-image"
          src={animated}
          alt="assistant"
          className="opacity-[0.7] pointer-events-none"
        />
      </div>
    </section>
  );
}

export default Landingpage;
