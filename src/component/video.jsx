import React from 'react'
import edit from '../images/edit.png'
import copy from '../images/copy.png'
import facebook from '../images/g10.png'
import whatsapp from '../images/Vector.png'
import telegram from '../images/Artboard.png'
import video from '../images/video.png'
import VideoList from './videolist'

function Video() {
  return (
    <section>
      {/* LARGE SCREEN */}

      <div className="px-24 py-10 lg:flex gap-10 hidden">
        <div className="">
          <h2 className="font-bold text-4xl pb-8">Your Video is ready!</h2>
          <h4>Name</h4>
          <div className="flex items-center gap-4 text-[#413C6D] font-bold pb-8">
            <p>Untitled_Video_20232509</p>
            <img src={edit} alt="edit" />
          </div>

          <div className=" w-fit rounded-xl px-2 py-1 border-2">
            <input
              type="text"
              placeholder="enter email of receiver"
              className="p-2 outline-none"
            />
            <button className="text-white bg-[#605C84] p-2 rounded-lg">
              Send
            </button>
          </div>

          <p className="pt-8 pb-2 font-bold text-lg">Video URL</p>
          <div className="  flex rounded-xl px-2 py-1 border-2 w-96">
            <input
              type="text"
              placeholder="https://www.helpmeout/Untitled_Video_20232509"
              className="p-2 outline-none w-full"
            />
            <button className="flex items-center gap-2 px-4 rounded-lg text-[#605C84] border-2 border-[#605C84]">
              <img src={copy} alt="copy" className="w-4 h-4" />
              <p>Copy</p>
            </button>
          </div>
          <div>
            <p className="pt-8 font-bold pb-4">Share your video</p>
            <div className="flex gap-4">
              <div className="border-2 p-2 flex gap-2 w-fit rounded-lg items-center">
                <img src={facebook} alt="facebook" />
                <p>Facebook</p>
              </div>
              <div className="border-2 p-2 flex gap-2 w-fit rounded-lg items-center">
                <img src={whatsapp} alt="whatsapp" />
                <p>Whatsapp</p>
              </div>
              <div className="border-2 p-2 flex gap-2 w-fit rounded-lg items-center">
                <img src={telegram} alt="telegram" />
                <p>Telegram</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border"></div>
          <div>
            
            <VideoList />
          </div>
          
        
      </div>

      {/* //MOBILE DEVICES */}
      <div className="px-24 py-10 flex flex-col gap-10 lg:hidden">
        <div className="">
          <h2 className="font-bold text-4xl pb-8">Share recording</h2>
          <h4>Name</h4>
          <div className="flex items-center gap-4 text-[#413C6D] font-bold pb-8">
            <p>Untitled_Video_20232509</p>
            <img src={edit} alt="edit" />
          </div>
          <div>
            <img src={video} alt="video" />
          </div>

          <div className=" w-fit rounded-xl px-2 py-1 mt-6 border-2">
            <input
              type="text"
              placeholder="enter email of receiver"
              className="p-2 outline-none"
            />
            <button className="text-white bg-[#605C84] p-2 rounded-lg">
              Send
            </button>
          </div>

          <div className="flex gap-2 items-center pt-6">
            <button className="flex items-center gap-2 px-3 rounded-lg text-[#605C84] border-2 border-[#605C84]">
              <img src={copy} alt="copy" className="w-4 h-4" />
              <p>Copy</p>
            </button>
            <div className="flex gap-4">
              <img src={facebook} alt="facebook" />

              <img src={whatsapp} alt="whatsapp" />

              <img src={telegram} alt="telegram" />
            </div>
          </div>
        </div>

        <div className="border"></div>
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-bold pb-2">Transcript</h3>
            <select
              name="language"
              id="lang"
              className="w-44 text-[#7E7E7E] border-2  outline-none"
            >
              <option value="English" selected>
                English
              </option>
              <option value="French">French</option>
              <option value="German">German</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-[#E7E7ED33] text-center p-4 pb-14">
        <h3 className="font-bold text-lg p-4 flex flex-col">
          To ensure the availability and privacy of your
          <span>video, we recommend saving it to your account.</span>
        </h3>
        <button className="text-white bg-[#120B48] rounded-lg p-2 mt-4 mb-8">
          Save video
        </button>
        <h3 className="text-[#7E7E7E]">
          Don’t have an account?{" "}
          <a href="/signup" className="text-[#120B48] font-bold underline">
            Create account
          </a>
        </h3>
      </div>
    </section>
  );
}

export default Video