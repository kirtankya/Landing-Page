import React from 'react'
import './news.scss';
import image from '../../../assets/images/347379870_811409306985874_2718421041058219320_n.png';
import images from '../../../assets/images/348215949_244160588289724_3918286596714478799_n.jpg';
import img from '../../../assets/images/349135947_161314316728252_6554497809534119768_n.jpg';
export default function News() {
    return (
        <div className='news-background'>
            <div className="conatiner">
                <p>Latest news</p>
                <div className="grid-background">
                    <div className='box'>
                       <img src={image} alt="img" />
                        <h4>Meta Quest 3. Coming this fall. Everything you need to know about our most powerful† headset yet and so much more.</h4>
                    </div>
                    <div className='box'>
                        <img src={images} alt="img" />
                        <h4>Meta Quest 3. Coming this fall. Everything you need to know about our most powerful† headset yet and so much more.</h4>
                    </div>
                    <div className='box'>
                        <img src={img} alt="img" />
                        <h4>Meta Quest 3. Coming this fall. Everything you need to know about our most powerful† headset yet and so much more.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
