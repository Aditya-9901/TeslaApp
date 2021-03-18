
import React,{useState} from 'react';
import Navbar from "./Navbar";
import "./Home.css";
import Sidebar from './Sidebar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CarFeatures from './CarFeatures';



function Home() {

    const { innerWidth: width, innerHeight: height } = window;

    

    
    const scrollToPos = (pos) => {
        console.log(pos);
        window.scrollTo(0, pos);
        
    }
    
    

    
    return (

        <div>

        
        <div className="Home" style={{height:height}} >
             
             
             <Navbar   />
             
             
             
             {/* <div className="sidebarView">

             <div id="home__sidebar"><Sidebar /></div>

             </div> */}
                
                 <div className="heading" style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:20}}><h2>Roadster</h2></div>
             
                 
                 <CarFeatures />

                 {/* <ExpandMoreIcon onClick={()=>{scrollToPos(500)}} style={{color:"white",fontSize:50,position:"fixed",top:580}} /> */}
            

           
           {/* <img src="https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/wp-content/uploads/2017/11/Tesla-Roadster-103.jpg" style={{width:"100%",height:"100%",objectFit:"contain",overflow:"hidden"}} alt="" /> */}
        </div>

        <div id="heythere">
            <h1>test</h1>
        </div>
        
        </div>
    )
}

export default Home
