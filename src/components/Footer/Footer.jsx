import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" className="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
          <div className="footer-content-left-social-icons">
            <img src={assets.linkedin_icon} alt="" className="linkedin-icon" />
            <img src={assets.facebook_icon} alt="" className="facebook-icon" />
            <img src={assets.twitter_icon} alt="" className="twitter-icon" />
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>About us</li>
            <li>Home</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9876543210</li>
            <li>info@fooddelivery.com</li>
            <li>123, Main Street, Anytown, USA</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footercopyright">
        Copyright © 2026 Food Delivery. All rights reserved.
      </p>
    </div>
  )
}

export default Footer
