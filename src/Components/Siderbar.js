// import React from 'react';
// import "../Components/Sidebar.css"

// function Siderbar() {
//     return (
//         <div className="sidebar">
//             <ul>
//                 <li><a href="#">Model S</a></li>
//                 <hr className="line" />
//                 <li><a href="#">Model 3</a></li>
//                 <hr className="line" />
//                 <li><a href="#">Model X</a></li>
//                 <hr className="line" />
//                 <li><a href="#">Model Y</a></li>
//                 <hr className="line" />
//                 <li><a href="#">Solar Roof</a></li>
//                 <hr className="line" />
//                 <li><a href="#">Solar Panel</a></li>
//             </ul>
//         </div>
//     )
// }

// export default Siderbar


import React from 'react';
import "../Components/Sidebar.css"
import MenuIcon from '@material-ui/icons/Menu';

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
}

function Siderbar() {
  return (
    <>
<div id="mySidenav" className="sidenav">
  <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
  <a href="#">MODEL S</a>
  <hr />
  <a href="#">MODEL 3</a>
  <hr />
  <a href="#">MODEL X</a>
  <hr />
  <a href="#">MODEL y</a>
  <hr />
  <a href="#">Solar roof</a>
  <hr />
  <a href="#">Solar Panel</a>



</div>


<span style={{  cursor:"pointer" ,    marginRight: "20px"}} onClick={openNav}><MenuIcon style={{fontSize:30}} /> </span>
</>
)
}

export default Siderbar;