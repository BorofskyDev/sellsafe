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
                <h4>Request Early Access to Get Started</h4>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Neque sodales ut etiam sit amet. Nec feugiat nisl pretium fusce id velit ut. Vel pharetra vel turpis nunc. Ornare massa eget egestas purus viverra accumsan. Convallis convallis tellus id interdum. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Et tortor consequat id porta nibh venenatis. Ultrices in iaculis nunc sed. Vivamus arcu felis bibendum ut tristique et. Viverra nam libero justo laoreet sit.</p>
                <h4>Request Early Access to Get Started</h4> 
            </div>
        </div>
    );
};

export default Possibility;
