import React from 'react'
import './community.scss';
import image from '../../../assets/images/315157506_1170957810500310_1226656149043129923_n.jpg';
import images from '../../../assets/images/316054853_537242221174482_643961872326934779_n.jpg';
import img from '../../../assets/images/316104247_1302601013891086_1746123259535763913_n.jpg';
export default function Community() {
  return (
    <div className='community-background'>
      <div className="conatiner">
        <div className="community-text">
          <p>Community</p>
          <h2>A world of opportunity for everybody</h2>
          <div className="background-button-1">
            <div className="button-flex">
              <i class="bi bi-arrow-right-circle icon"></i>
              <div className="button">
                <p className="button-text">Learn more</p>
              </div>
            </div>
          </div>
        </div>
        <div className="images">
          <img src={image} alt="image" />
          <img src={images} alt="image" />
          <img src={img} alt="image" />
        </div>
        <p className='image-text'>VR for good</p>
        <p className='image-text-1'>The power of virtual reality helps us transform education, improve productivity and advance social movements worldwide.</p>
        <div className="background-button-1">
          <div className="button-flex">
            <i class="bi bi-arrow-right-circle icon"></i>
            <div className="button">
              <p className="button-text">Learn more</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
