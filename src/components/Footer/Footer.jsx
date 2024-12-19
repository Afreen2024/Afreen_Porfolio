// import React from "react";
// import './Footer.css'
// import footer_logo from '../../assets/footer_logo.svg'
// import user_icon from '../.../assets/user_icon.svg'
// const Footer=()=>{
//     return(
//         <div className="footer">
//             <div className="footer-top">
//             <div className="footer-top-left">
//                 <img src={footer_logo} alt="" />
//                 <p>i m a freontend developer from,USA with 10year of experience</p>
//             </div>
//             <div className="footer-top-right">
//                 <div className="footer-email-input">
//                     <img src={user_icon} alt="" />
//                     <input type="email" placeholder="Enter your email"/>

//                 </div>
//                 <div className="footer-subscribe">
//                     Subscribe
//                 </div>
//             </div>

//             </div>

//         </div>
//     )
// }
// export default Footer
// *************************************************************************************************************



import React from "react";
import './Footer.css';
import footer_logo from '../../assets/footer_logo.svg'; 
import user_icon from '../../assets/user_icon.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_logo} alt="Company logo" />
                    <p>I'm a frontend developer from the USA with 10 years of experience.</p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="User icon" />
                        <input type="email" placeholder="Enter your email address" />
                    </div>
                    <button className="footer-subscribe">
                        Subscribe
                    </button>
                </div>
            </div>
            <hr/>
            <div className="footer-buttom">
                <p className="footer-buttom-left"> 	 2023 Afreen jahangeer.All right</p>
                <div className="footer-buttom-right">
                    <p> Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>


            </div>
        </footer>
    );
}

export default Footer;
