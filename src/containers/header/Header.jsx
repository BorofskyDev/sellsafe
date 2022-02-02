import React from 'react';
import './Header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
    return (
        <div className='SellSafe__header section__padding' id='home'>
            <div className='SellSafe__header-content'>
                <h1 className='gradient__text'>Increase Your Cash Flow with SellSafe</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam sem et tortor consequat id porta nibh venenatis cras. A condimentum vitae sapien pellentesque habitant morbi tristique.</p>
                <div className='SellSafe__header-content__input'>
                    <input type='email' placeholder='Your Email' />
                    <button type='button'>Get Started</button>
                </div>
                <div className='SellSafe__header-content__people'>
                    <img src={people} alt='people' />
                    <p>1,600 people requested access</p>
                </div>
            </div>
            <div className='SellSafe__header-image'>
                <img src={ai} alt='ai' />
            </div>
        </div>
    );
};

export default Header;
