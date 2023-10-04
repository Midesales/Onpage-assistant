import React from 'react'
import Header from './header'
import Footer from './footer'
import Video from './video'
import logo from '../images/iCON 7 1.png'

function Record() {
  return (
    <div>
      <a href="/" className="flex items-center gap-2 px-24 pt-10 pb-6">
        <img src={logo} alt="logo" />
        <p className="">HelpMeOut</p>
      </a>
      <Video />
      <Footer />
    </div>
  );
}

export default Record