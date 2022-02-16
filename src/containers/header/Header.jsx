import React from 'react';
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import { FaEnvelope, FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='SellSafe__header section__padding' id='home'>
            <div className='SellSafe__header-content'>
                <h1 className='gradient__text'>Increase Your Cash Flow with SellSafe</h1>
                <p>SellSafe helps Business to Business companies make informed credit decisions in their sales process. We help small to medium-sized B2B companies increase their sales, increase their cash flow, and give them a competitive advantage over larger competition. </p>
                <div className='SellSafe__header-content__input'>
                    <a className='SellSafe__link-btn' href='#footer'> <button type='button'> Get Started</button></a>
                </div>
                {/* <div className='SellSafe__header-content__people'>
                    <button className='SellSafe__header-content__social'><FaFacebook className='SellSafe__header-content___social-icon'/></button>
                    <button className='SellSafe__header-content__social'><FaLinkedin className='SellSafe__header-content___social-icon'/></button>
                    <button className='SellSafe__header-content__social'><FaTwitter className='SellSafe__header-content___social-icon'/></button>
                    <button className='SellSafe__header-content__social'><FaYoutube className='SellSafe__header-content___social-icon'/></button>
                    <button className='SellSafe__header-content__social'><FaEnvelope className='SellSafe__header-content___social-icon'/></button>
                </div> */}
            </div>
            <div className='SellSafe__header-image'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    );
};

export default Header;
