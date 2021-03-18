import React from 'react';
import "./Navbar.css";
import Sidebar from './Sidebar';





function Navbar() {
    
    return (
        <div className="Navbar">
        <div className="leftNav">
            <img src="https://d1ly52g9wjvbd2.cloudfront.net/post/94c2c3021c6d6623a2eb0a42773d81ac_08ed8c07733b28ae0a2abdca21042d88.jpg" alt=""/>
        </div>

        <div className="centerNav">
            <ul>
                <li><a href="#">Model S</a></li>
                <li><a href="#">Model 3</a></li>
                <li><a href="#">Model X</a></li>
                <li><a href="#">Model Y</a></li>
                <li><a href="#">Solar Roof</a></li>
                <li><a href="#">Solar Panel</a></li>
            </ul>
        </div>

        <div >
            <ul className="rightNav">
                <li><a href="#">Shop</a></li>
                <li><a href="#">Tesla account</a></li>
                <Sidebar />
               
            </ul>
        </div>

    </div>
    )
}

export default Navbar;
