import React from 'react'
import './Contact.css'
import { Button} from 'react-bootstrap';
import email from '../../assets/email.jpg';
import link from '../../assets/link.jpg';
import git from '../../assets/git.jpg';
import insta from '../../assets/insta.jpg';

function Contact() {
  return (
    <div className="contact" id="contact">
    <div className="contactHeader">
<h2>Contact Me</h2>
  </div>

  
            <div className="container">
					<button className="social" onClick={() => window.location = 'mailto:jyotsnapnr@gmail.com'}>
          <img src={email} className="socialimg" alt="gmail"/></button>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jyotsna-koova-1376937a"> 
                    <button className="social"><img src={link}  className="socialimg" alt="linkedin" /></button> </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Jyotsnapnr">
                     <button className="social"><img src={git}  className="socialimg" alt="github"/></button></a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/jyotsnapnr">
                    <button className="social"><img src={insta}  className="socialimg" alt="insta"/></button></a>
					</div>
                    
				</div>
  
  )
}

export default Contact