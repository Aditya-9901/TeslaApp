


import React from 'react';
import "./Sidebar.css"
import MenuIcon from '@material-ui/icons/Menu';

const openNav = () => {
  document.getElementById("mySidenav").style.width = "250px";
}

const closeNav = () => {
  document.getElementById("mySidenav").style.width = "0";
}

function Sidebar() {
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

export default Sidebar;