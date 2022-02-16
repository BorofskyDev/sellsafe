import React from 'react';
import './Features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
    {
        title: 'Instant credit decisions',
        text: 'Why wait for a credit decision and potentially lose the sale? Get safe, secure, and guaranteed credit decisions rapidly.'
    },
    {
        title: 'Stable business growth',
        text: 'Cash flow issues are listed as the number one reason for busines bankruptcy in over 70% of business closures. Our system eliminates this issue, allowing you to enjoy stable growth.'
    },
    {
        title: 'Quicker sales process',
        text: 'Your customers will find the ease of business you provide to benefit them. We can cut a 2-5 day credit decision process down to a few hours, allowing you to get your product out quicker.'
    },
    {
        title: 'Competitive advantage',
        text: 'All of this adds up to SellSafe giving you the advantage over any competition, big or small. Being able to make smarter, quicker credit decisions allows you to move faster than the market.'
    },
]

const Features = () => {
    return (
        <div className='SellSafe__features section__padding' id='features'>
            <div className='SellSafe__features-heading'>
                <h1 className='gradient__text'>The Future is Fast and You Need to Be Faster. We Help You Make that Happen</h1>
                <a href='#footer'> <p>Request Early Access to Get Started</p></a>
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
