import React from 'react';
import './TopSide.css';

function TopSide({roof_cond}) {
    return (
        <div className={roof_cond ? "close" : "open"}>
            <div >
                <h2 className="head">Glass Roof</h2>
                <p className="desc">A lightweight, removable Glass Roof stores in the trunk for an open-air, convertible driving experience.</p>
            </div>
                
            
        </div>
    )
}

export default TopSide
