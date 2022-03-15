import React from 'react';
import college from '../../assets/college.jpg';
import './Education.css'
import udemy from '../../assets/udemy.jpg';
import webudemy from '../../assets/webudemy.jpg';
import codecamp from '../../assets/codecamp.jpg';
import  cert from '../../assets/react.jpg';

function Education() {
  return (
    <div className="education" id="education">
    <div className="educationHeader">
<h2>Education & Certifications</h2>
  </div>

  <div className="row row-cols-1 row-cols-md-5 g-4">
  <div className="col">
    <div className="card">
      <img src={college} className="card-img-top" alt="my college" style={{height:"212px"}}/>
      <div className="card-body">
        <h5 className="card-title">Govenment Engineering College, Idukki</h5>
        <h6 className="card-text">
            2008-2012
        </h6>
        <h5 className="card-text">
           Information Technology
        </h5>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={codecamp} className="card-img-top" alt="react certificate" style={{height:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">Udemy React course</h5>
        <h6 className="card-title">
        React Development: Developed Web Applications Using Socket, REST APIs, Firebase, React Hooks, Bootstrap, React.js.
        </h6>
        </div>
        </div>
        </div>
  <div className="col">
    <div className="card">
      <img src={webudemy} className="card-img-top" alt="web developer" style={{height:"225px"}}/>
      <div className="card-body">
        <h5 className="card-title">Web development Course</h5>
        <h6 className="card-text">
        HTML, CSS, Javascript, Node, React, MongoDB, built real project
        </h6>
       
        
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src={udemy} className="card-img-top" alt="codecamp" style={{height:"200px"}}/>
      <div className="card-body">
        <h5 className="card-title">Javascript algorithms and data structures</h5>
        <h6 className="card-text">
        300 hours of JavaScript coding, OOP and Functional Programming</h6>
       
        
      </div>
    </div>
  </div>


  <div className="col">
    <div className="card">
      <img src={cert} className="card-img-top" alt="codecamp" style={{height:"260px"}}/>
      <div className="card-body">
        <h5 className="card-title">Responsive Web design</h5>
        <h6 className="card-text">
        300 hours of HTML & CSS
        </h6>
       
        
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Education