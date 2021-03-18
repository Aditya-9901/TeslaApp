import React from 'react'

function Footer() {
    return (
        <div className="footerVideo">
            <video
                className="videoContianer" 
                height="200"
                width="200"
                controls
                >
                    <source src="https://www.youtube.com/watch?v=TOjtM9D86y4" type="video/mp4"></source>
            </video>
        </div>
    )
}

export default Footer

