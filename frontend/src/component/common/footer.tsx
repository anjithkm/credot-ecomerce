import React from "react";
import Button from "../button";

const Footer : React.FC = () => {

    return (
        <footer className='footer'>

        <div className='footer-container'>
        <div className='horizontal-seperator top'/>
        <img className='logo' src='/assets/images/logo.png'/>

        <div className='footer-extra'>
          
        <div>
        <div className='social-media'>
        <p className='social-media-title'/>
          <div className='social-media-container'>
            <Button className='rounded social-media-button' icon={<img  src='/assets/icons/facebook.svg' alt="facebook"/>} />
            <Button className='rounded social-media-button' icon={<img  src='/assets/icons/twitter.svg' alt="twitter"/>} />
            <Button className='rounded social-media-button' icon={<img  src='/assets/icons/linkedin.svg' alt="linkedin"/>} />
            <Button className='rounded social-media-button' icon={<img  src='/assets/icons/youtube.svg' alt="youtube"/>} />
          </div>
        </div>
        <div className='important-link' >
        <p className='important-link-title'>important Links</p>
        <div className='important-link-container'>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Help & FAQs</p>
          </div>
        </div>
        </div>

        <div>
          <div className='vertical-seperator'/>
          <div className='help-line' >
          <Button className='rounded help-line-button' icon={<img  src='/assets/icons/phone.svg' alt=""/>} />
          <p className='help-line-title'>Helpline</p>
          <p className='help-line-number'>1800 456 84788</p>
          </div>
        </div>

        </div>
        <div className='horizontal-seperator'/>
        <p  className='all-rights-reserved'>Arab Deals  © 2023. All Rights Reserved</p>
        </div>
        
      </footer>
    )
  
}

export default Footer;
  