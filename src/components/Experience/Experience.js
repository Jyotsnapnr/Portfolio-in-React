import React from 'react'
import './experience.css'

function Experience() {
  return (
    <section id="experience" className="experience">
<h1 className="about">Work experience</h1>


<div className="container about__container" style={{marginTop:"100px"}}>
    <div className="timeline">
    <div className="contain right">
        <div className="content">
        <h4>Freelancer</h4>
        <h5>Jan 2022 to present</h5>
        <h5>Developing MERN websites for various bussiness</h5>
</div>
        </div>

        <div className="contain right">
            <div className="content">
                <h4>Oranz Technology Solution</h4>
                <h5>May 2013 to Jan 2015</h5>
                <h5>Java, PHP, Angular Developer</h5>
            </div>
        </div>
        
        <div className="contain right">
            <div className="content">
                <h4>Sutherland</h4>
                <h5>Sept 2012 to April 2013</h5>
                <h5>Software Support</h5>
            </div>
        </div>

        <div className="contain right">
            <div className="content">
                <h4>ThinkForce</h4>
                <h5>Jun 2012 to April 2013</h5>
                <h5>Software Trainee, Java Projects</h5>
            </div>
        </div>
    </div>
</div>
  
 </section>
  )
}

export default Experience