import React from "react";
import './About.css'
// +++++++++++++++pic
// import profile_img from '../../assets'
import theme_pattern from '../../assets/theme_pattern.svg'


const About =()=>{
    return(
        <div id="about" className="about">
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />

            </div>
            <div className="about-section">
                <div className="about-left">
            {/* PIC */}

</div>
<div className="about-right">
    <div className="about-para">
        <p>A highly skilled Frontend Developer with [X] years of experience in building responsive, user-friendly web applications. Proficient in modern JavaScript frameworks and libraries such as React, Vue, or Angular. Strong understanding of web standards, accessibility, and best practices. Passionate about creating seamless user experiences and optimizing performance.

</p>
        
    </div>
    <div className="about-skills">
    <div className="about-skill"><p> HTML, CSS
    </p> <hr style={{width:'50%'}}/></div>

    <div className="about-skill"><p>  JavaScript
    </p> <hr style={{width:'70%'}}/></div>

    <div className="about-skill"><p>  TypeScript
    </p> <hr style={{width:'60%'}}/></div>

    <div className="about-skill"><p> Next Js
    </p> <hr style={{width:'50%'}}/></div>




 </div>
 </div>
 </div>
 <div className="about-achevements">
 <div className="about-achevement">
    <h1>10+</h1>
    <p>YEARS OF EXPERIENCE</p>
    </div>
    <hr/>

    <div className="about-achevement">
    <h1>15+</h1>
    <p>PROJECT COMPLETED</p>
    </div>
    <hr/>

    <div className="about-achevement">
    <h1>15+</h1>
    <p>HAPPY CLIENT</p>
    </div>
    </div>
    </div>

   )
}
export default About




