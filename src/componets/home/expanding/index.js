import React from 'react'
import './expanding.scss';
import image from '../../../assets/images/364800147_1259048278144110_423552307500721769_n.png';

export default function Expanding() {
    return (
        <div className='expanding-background'>
            <div className="conatiner">
                <div className='grid-section'>
                    <div className='images'>
                        <img src={image} alt="image" />
                    </div>
                    <div className='text'>
                        <p>Expanding reality, today and tomorrow</p>
                        <span>Join us on September 27 and 28 for a virtual event focused on AI and virtual, mixed and augmented realities.</span>
                        <a href="">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
