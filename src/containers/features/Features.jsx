import React from 'react';
import './Features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
    {
        title: 'Instant credit decisions',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Increased cash flow',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Quicker sales process',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        title: 'Competitive advantage',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
]

const Features = () => {
    return (
        <div className='SellSafe__features section__padding' id='features'>
            <div className='SellSafe__features-heading'>
                <h1 className='gradient__text'>The Future is Fast and You Need to Be Faster. We Help You Make that Happen</h1>
                <p>Request Early Access to Get Started</p>
            </div>
            <div className='SellSafe__features-container'>
                {featuresData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    );
};

export default Features;
