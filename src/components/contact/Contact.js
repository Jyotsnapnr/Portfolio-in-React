import React from 'react'
import './Contact.css'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';



function Contact() {
  return (
    <div className="contact" id="contact">
    <div className="contactHeader">
<h2>Contact Me</h2>
  </div>

  
            <div className="container">
					<button className="mail" onClick={() => window.location = 'mailto:jyotsnapnr@gmail.com'} style={{backgroundColor: 'black', border: '1px solid black'}}>
         <EmailIcon style={{color: 'red', width: "50px", height: "50px"}} className="socialimg"/></button>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jyotsna-koova-1376937a"
                    className="social"><LinkedInIcon className="socialimg"  style={{ width: "60px", height: "60px"}}/> </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Jyotsnapnr"
                      className="social"><GitHubIcon  className="socialimg" style={{color: 'white', width: "60px", height: "60px"}}/></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jyotsnapnr"
                    className="social"><InstagramIcon  className="socialimg" style={{color: '#f6378f', width: "60px", height: "60px"}}/></a>
					</div>
                    
				</div>
  
  )
}

export default Contact