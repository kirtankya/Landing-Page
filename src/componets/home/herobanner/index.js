import React from 'react'
import './herobanner.scss';
import image from '../../../assets/images/361257298_3177321489235068_898130475624882555_n.png';

export default function Herobanner() {
    return (
        <div className='herobanner-background'>
            <div className="conatiner">
                <div className='grid-background'>
                    <div className='background-text'>
                        <h2>Get ready for Meta Quest 3</h2>
                        <p>Enjoy breakthrough mixed reality that lets you blend virtual elements into the physical world around you—from $499.99 USD.</p>
                        <div className='button-1'>
                            <div className='button'>
                                <button>Get Update</button>
                            </div>
                        </div>
                    </div>
                    <div className='image'>
                        <img src={image} alt="img" />
                    </div>
                </div>
            </div>
        </div>
    )
}
