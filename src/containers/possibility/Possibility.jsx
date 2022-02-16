import React from 'react';
import './Possibility.css'
import aibrain from '../../assets/aibrain.png'

const Possibility = () => {
    return (
        <div className='SellSafe__possibility section__padding' id='possibility'>
            <div className='SellSafe__possibility-image'>
                <img src={aibrain}  alt='possibility' />
            </div>
            <div className='SellSafe__possibility-content'> 
                {/* <h4>Request Early Access to Get Started</h4> */}
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Our advanced algorithm takes decades of commercial credit expertise and places that power in your hands. Our system has approved over $4 billion in commercial credit and suffered less than $250,000 in uncollected debt. Imagine what possibilities await your business. </p>
                {/* <h4>Request Early Access to Get Started</h4>  */}
            </div>
        </div>
    );
};

export default Possibility;
