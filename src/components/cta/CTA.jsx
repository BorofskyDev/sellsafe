import React from 'react';
import './CTA.css'

const CTA = () => {
    return (
        <div className='SellSafe__cta gradient__bar'>
            <div className='SellSafe__cta-content'>
                <p>Request Early Access to Get Started</p>
                <h3>Register today & step into the future before it's here</h3>
            </div>
            <div className='SellSafe__cta-btn'>
                <button type='button'><a href="mailto: info@wesellsafe.com">Get Started</a></button>
            </div>
        </div>
    );
};

export default CTA;