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
                <p>Base Specs</p>
                <p>Acceleration 0-60 mph   1.9 sec</p>
                <p>Acceleration 0-100 mph   4.2 sec</p>
                <p>Acceleration 1/4 mile  8.8 sec</p>
                <p>Top Speed       Over 250 mph</p>

            </div>
        </div>


    )     
}

export default Video
