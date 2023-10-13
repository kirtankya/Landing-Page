import React from 'react'
import './company.scss';
import videos from '../../../assets/video/video-1.mp4';

export default function Company() {
    return (
        <div className='company-background'>
            <div className="container">
                <div className="compnay-background-text">
                    <h2>A mission-driven company</h2>
                    <span>Meet the teams behind our products and explore our vision for the future.</span>
                    <div className="background-button-1">
                        <div className="button-flex">
                            <i class="bi bi-arrow-right-circle icon"></i>
                            <div className="button">
                                <p className="button-text">Learn more about Meta</p>
                            </div>
                        </div>
                    </div>
                    <div className="video">
                        <video controls muted autoplay={true} src={videos}></video>
                    </div>
                </div>
            </div>
        </div>
    )
}
