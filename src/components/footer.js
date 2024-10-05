import React from 'react';
import "./footer.css";
import {FaGithub,FaLinkedin,FaInstagram} from "react-icons/fa";

const Footer = () => {
    return (
<div className='foot'>

        <h1 className='name'>BAVANIKRISHNAN</h1>
        <h4 className='slo'>Reveal Your Brilliance In Every Situation Of Your Life</h4>
        <a href="https://www.linkedin.com/in/bavani-krishnan-9b7025259" target="_blank" className="linkedin">
        <FaLinkedin size={30}/>
        </a>
        <a href="https://github.com/Bavanikrishnan" target="_blank" className="github">
        <FaGithub size={30}/>
        </a>
        <a href="https://www.instagram.com/bavani_the_princess_30?utm_source=qr&igsh=bnM1cDE0NDZxcTRs" target="_blank" className="instagram">
        <FaInstagram size={30}/>
        </a>

</div>
    );
};

export default Footer;
