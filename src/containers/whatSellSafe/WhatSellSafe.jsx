import React from 'react';
import { Feature } from '../../components';
import './WhatSellSafe.css'

const WhatSellSafe = () => {
    return (
        <div className='SellSafe__whatSellSafe section__margin' id='whatsell'>
            <div className='SellSafe__whatSellSafe-feature'>
                <Feature title='What is SellSafe?' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent semper feugiat nibh sed. Sit amet tellus cras adipiscing enim eu turpis egestas.'/>
            </div>
            <div className='SellSafe__whatSellSafe-heading'>
                <h1 className='gradient__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                <p>Explore the library</p>
            </div>
            <div className='SellSafe__whatSellSafe-container'>
                <Feature title='Cash Flow' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                <Feature title='Mitigation' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
                <Feature title='Sales' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'/>
            </div>
        </div>
    );
};

export default WhatSellSafe;
