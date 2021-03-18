import React from 'react';
import ReactPlayer from 'react-player/youtube';
import "./Footer.css"

function Footer() {
    return (
        <div className="footer">
            
             <ReactPlayer controls width="720px" height="680px" className="footerVideo" url='https://www.youtube.com/watch?v=TOjtM9D86y4' controls={true} />
             <p className="footerDetail">Watch the Roadster Unveil · November 16, 2017</p>
             {/* <div class="vl">yo</div> */}

             <div className="line">
                 <hr style={{width:"100px"}}/>
             </div>

             <ul className="btnList">
                <li><button className="footerBtn">RESERVE NOW</button></li>
                <li><button className="footerBtn secBtn">GET NEWSLETTER</button></li>
             </ul>
        </div>
    )
}

export default Footer

