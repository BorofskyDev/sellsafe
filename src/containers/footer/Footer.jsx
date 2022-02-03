import React from 'react';
import { BsShieldCheck } from 'react-icons/bs';
import './Footer.css'

const Footer = () => {
    return (
        <div className='SellSafe__footer section__padding'>
            <div className='SellSafe__footer-heading'>
                <h1 className='gradient__text'>Step into the future with us</h1>
            </div>
            <div className='SellSafe__footer-btn'>
                <p>Request Early Access</p>
            </div>
            <div className='SellSafe__footer-links'>
                <div className='SellSafe__footer-links_logo'>
                    <p className='SellSafe__footer-links_logo2'><BsShieldCheck className='SellSafe__footer-links_logo-icon' />SellSafe</p>
                    {/* <img/> */}
                </div>
                <div className='SellSafe__footer-links_div'>
                    <h4>Social Media</h4>
                    <p>Social Media</p>
                    <p>Contact</p>
                </div>
                <div className='SellSafe__footer-links_div'>
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>
                <div className='SellSafe__footer-links_div'>
                    <h4>Customer Service</h4>
                    <p>1234 Main St, Anytown, Some State, USA</p>
                    <p>555-555-5555</p>
                    <p>info@sellsafe.com</p>
                    <p>media@sellsafe.com (for media inquirires)</p>
                </div>
            </div>
            <div className='SellSafe__footer-copyright'>
                <p>© 2022 SellSafe. All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
