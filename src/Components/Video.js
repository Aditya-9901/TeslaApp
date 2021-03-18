import React from 'react';
import "./Vide.css" 
// import  "./Asserts/Tesla"
// import ReactPlayer from "react-player"



function Video() {

    

    return (
        <div className="video">
            
            <video
                className="videoContianer" 
                autoPlay={true}
                muted
                loop
                >
                    <source src="https://www.tesla.com/ns_videos/roadster_videos/roadster-loop-imperial.mp4?20180329" type="video/mp4"></source>
            </video>

            <div className="videoSpecs">
               
                <div className="cont">
                    <p className="left">Base Specs</p>
                    
                </div>
                <hr className="new1"/>
                <div className="cont">
                    <p className="left">Acceleration 0-60 mph</p>
                    <p className="right">1.9 sec</p>
                    
                </div>
                <hr className="new1"/>
                <div className="cont">
                    <p className="left">Acceleration 0-100 mph</p>
                    <p className="right">4.2 sec</p>
                    
                </div>
                <hr className="new1"/>
                <div className="cont">
                    <p className="left">Acceleration 1/4 mile</p>
                    <p className="right">8.8 sec</p>
                    
                </div>
                <hr className="new1"/>
                <div className="cont">
                    <p className="left">Top Speed</p>
                    <p className="right">Over 250 mph</p>
                   
                </div>
                
            </div>
        </div>


    )     
}

export default Video
