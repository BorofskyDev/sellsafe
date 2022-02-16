import React from 'react';
import { Feature } from '../../components';
import './WhatSellSafe.css'

const WhatSellSafe = () => {
    return (
        <div className='SellSafe__whatSellSafe section__margin' id='whatsell'>
            <div className='SellSafe__whatSellSafe-feature'>
                <Feature title='What is SellSafe?' text='SellSafe is a system developed by 2000s National Credit Executive of the Year, Mark Borofsky, who has over 40 years experience in Commercial Credit and its application in a multitude of industries. Our system takes an expertise typically reserved for larger corporations and makes it accessible to companies of any size.'/>
            </div>
            <div className='SellSafe__whatSellSafe-heading'>
                <h1 className='gradient__text'>Cash Flow is King and we give you access to the Throne</h1>
                {/* <p>Explore the library</p> */}
            </div>
            <div className='SellSafe__whatSellSafe-container'>
                <Feature title='Cash Flow' text='SellSafe customers can expect to see a significant increase in their on-time pay rate. We get your profits to you quicker.'/>
                <Feature title='Mitigation' text='Loss is inevitable, but it can be mitigated. Our expert system will provide extra protection against late payers and non-payers.'/>
                <Feature title='Sales' text='Using our system can lead to a credit approval in a matter of moments rather than days. Feel confident knowing that your quick sales are also secure sales.'/>
            </div>
        </div>
    );
};

export default WhatSellSafe;
