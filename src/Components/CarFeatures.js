import React from 'react';
import "./CarFeatures.css";
import SpeedIcon from '@material-ui/icons/Speed';

function CarFeatures() {
    return (
        <div>
            <div className="headerBottom">
              <p>The quickest car in the world, with record-</p>
               <p>setting acceleration, range and performance.</p>
            </div>

            <div className="headerIcons">
              <ul className="headerIconsList">
                  <li><p className="big"><SpeedIcon />1.9<span>s</span></p><p className="prefix">0-60 mph</p></li>
                  <li><p className="suffix">+250 mph</p><p className="prefix">Top Speed</p></li>
                  <li><p className="suffix">620 mi</p><p className="prefix">Range</p></li>
                  <li><button className="headerBtn">RESERVE NOW</button></li>
                  </ul>
                  </div>
        </div>
    )
}

export default CarFeatures;
