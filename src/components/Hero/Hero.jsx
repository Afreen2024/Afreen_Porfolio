import React from "react";
import './Hero.css'
import AnchorLink from "react-anchor-link-smooth-scroll";



//  import profile_img from '../../assets/image.jpg'
 const Hero =()=>{
    return(
        <div id="home" className="hero">
            {/* <img src={profile_img} alt="" />  */}
            <h1><span>I'm Afreen jahangeer,</span> frontend developer based in USA..</h1>
            <p>
Hey guys! My name is Afreen  i m a web developer who specializes in creating the visual and interactive elements of a website or web application.</p>

<div className="hero-action">
    <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink></div>
    <div className="hero-resume">My Resume</div>
</div>
        </div>
    )
  
 }
 export default Hero

