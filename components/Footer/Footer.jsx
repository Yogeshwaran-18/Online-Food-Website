import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>A food website footer typically includes essential links such as menu navigation, contact information, location details, social media links, newsletter sign-ups,
                     and policies like privacy and terms of service.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>DELIVERY</li>
                    <li>PRIVACY POLICY</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 987654321</li>
                    <li>food@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr/>
        <p className="footer-copyright">
            Copyright 2025@ Tomato.com - All Right Reserved.
        </p>




    </div>
  )
}

export default Footer