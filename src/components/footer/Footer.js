import React from 'react'
import './footer.css';

function Footer() {
  return (
    <div className="footer" style={{backgroundColor:"black"}}>
        <p style={{color:"rgb(12, 213, 248)"}}>
            Made with <span style={{color:"red", margin: '0 0.5rem -1rem 0.5rem'}}>
            ❤
            </span>
            by Jyotsna
        </p>
    </div>
  )
}

export default Footer