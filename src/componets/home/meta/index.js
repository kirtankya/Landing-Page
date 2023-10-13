import React from 'react'
import './meta.scss';
import image from '../../../assets/images/Screenshot 2023-09-20 192707.png';

export default function Meta() {
    return (
        <div className='meta-background'>
            <div className="conatiner">
                <div className="meta-flex">
                    <div className="meta-text">
                        <p className='text-1'>It’s Your World</p>
                        <span>Connect with people and interests across Meta technologies to help you make your world your own.</span>
                        <div className="background-button-1">
                            <div className="button-flex">
                                <i class="bi bi-arrow-right-circle icon"></i>
                                <div className="button">
                                    <p>Learn More</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="image-background">
                        <img src={image} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}
