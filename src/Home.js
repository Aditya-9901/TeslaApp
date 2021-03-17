import React from 'react';
import "./Home.css"
import Navbar from "./Components/Navbar"
import Siderbar from './Components/Siderbar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Home() {
    const { innerWidth: width, innerHeight: height } = window;

    const scrollToPos = (pos) => {
        console.log(pos);
        window.scrollTo(0, pos);
        
    }
    

    return (
        <div className="home">
            <Navbar />

            <div className="homeSideBar">
               {/* <Siderbar /> */}
            </div>
            
            <div className="header">
              <p>Roadster</p>
            </div>
            <div id="heythere">
            <h1>hey</h1>
        </div>
        </div>
    )
}

export default Home
