import React from 'react';
import "./AppDownload.css"
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id="app-download">
      <p>Download our app</p>
      <div className='app-download-platforms'>
        <img src={assets.app_store} alt="app-store" />
        <img src={assets.play_store} alt="play-store" />
      </div>
    </div>
  )
}

export default AppDownload


