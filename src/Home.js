import React from 'react';
import "./Home.css"
import Navbar from "./Components/Navbar"
import SpeedSharpIcon from '@material-ui/icons/SpeedSharp';
import Siderbar from './Components/Siderbar';

function Home() {
    return (
        <div className="home">
            <Navbar />
            

            <div className="homeSideBar">
               {/* <Siderbar /> */}
            </div>
            
            <div className="header">
              <p>Roadster</p>
            </div>

            <div className="headerBottom">
              <p>The quickest car in the world, with record-</p>
               <p>setting acceleration, range and performance.</p>
            </div>

            <div className="headerIcons">
              <ul className="headerIconsList">
                  <li><p className="big"><SpeedSharpIcon />1.9<span>s</span></p><p className="prefix">0-60 mph</p></li>
                  <li><p className="suffix">+250 mph</p><p className="prefix">Top Speed</p></li>
                  <li><p className="suffix">620 mi</p><p className="prefix">Range</p></li>
                  <li><button className="headerBtn">RESERVE NOW</button></li>


              </ul>
            </div>
        </div>
    )
}

export default Home
