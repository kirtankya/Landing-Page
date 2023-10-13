import React from "react";
import "./stay.scss";
import video from '../../../assets/video/video.mp4';

export default function Stay() {
    return (
        <div>
            <div className="stay-background">
                <div className="conatiner">
                    <div className="stay-background-text">
                        <h2>More ways to stay connected</h2>
                        <p>
                            From social apps to virtual reality, Meta technologies help you feel
                            closer to the people and things you love.
                        </p>
                        <div className="background-button-1">
                            <div className="button-flex">
                                <i class="bi bi-arrow-right-circle icon"></i>
                                <div className="button">
                                    <p className="button-text">Explore our technologies</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <video controls muted autoplay={true} src={video}></video>
        </div>
    );
}
