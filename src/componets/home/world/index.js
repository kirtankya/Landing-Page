import React from "react";
import "./world.scss";
import images from "../../../assets/images/348215949_244160588289724_3918286596714478799_n.jpg";

export default function World() {
  return (
    <div  className="world-background">
      <div className="conatiner">
        <div className="background-flex">
          <div className="background-text">
            <p>FEATURED RELEASE</p>
            <div className="background-text-1">
              <h4>Massive worlds.</h4>
              <h4>Visceral combat.</h4>
              <h4>All in groundbreaking VR.</h4>
            </div>
            <span>
              The highly anticipated Asgard’s Wrath 2, coming Winter 2023—only
              on Meta Quest. Pre-order now to unlock exclusive bonuses.
            </span>
            <div className="flex-button">
              <div className="background-button">
                <div className="button">
                  <button>Pre-order now</button>
                </div>
              </div>
              <div className="background-button-1">
                <div className="button-flex">
                  <i class="bi bi-arrow-right-circle icon"></i>
                  <div className="button">
                    <p>Learn More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <img src={images} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}
