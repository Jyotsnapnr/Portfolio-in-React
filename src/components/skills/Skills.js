import React from 'react';
import Marquee from "react-fast-marquee";
import html from '../../assets/html5.svg';
import css3 from '../../assets/css3.svg';
import react from '../../assets/react.svg';
import bootstrap from '../../assets/bootstrap.svg';
import angular from '../../assets/angular.svg';
import aws from '../../assets/aws.svg';
import figma from '../../assets/figma.svg';
import java from '../../assets/java.svg';
import javascript from '../../assets/javascript.svg';
import laravel from '../../assets/laravel.svg';
import mongodb from '../../assets/mongodb.svg';
import mysql from '../../assets/mysql.svg';
import node from '../../assets/node-js.svg';
import php from '../../assets/php.svg';
import postgres from '../../assets/postgresql.svg';
import sass from '../../assets/sass.svg';
import spring from '../../assets/spring.svg';
import typescript from '../../assets/typescript.svg';
import vue from '../../assets/vue.svg';
import next from '../../assets/next.png';
import material from '../../assets/material.png';


import './skills.css';

function Skills() {

  const skillBoxStyle = {
    backgroundColor: "#323643",
    boxShadow: `0px 0px 30px gray`

  }
  return (
        <div className="skills" id="skills">
        <div className="skillsHeader">
    <h2>My Skills</h2>
      </div>
    <div className="skillsContainer">
<div className="skill--scroll">
<Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    >
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={html} alt="html" />
                        <h3 className="type">HTML5</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={css3} alt="html" />
                        <h3 className="type">CSS3</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={react} alt="html" />
                        <h3 className="type">REACT</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={bootstrap} alt="html" />
                        <h3 className="type">BOOTSTRAP</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={angular} alt="html" />
                        <h3 className="type">ANGULAR</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={aws} alt="html" />
                        <h3 className="type">AWS</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={figma} alt="html" />
                        <h3 className="type">FIGMA</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={java} alt="html" />
                        <h3 className="type">JAVA</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={javascript} alt="html" />
                        <h3 className="type">JAVASCRIPT</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={laravel} alt="html" />
                        <h3 className="type">LARAVEL</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={mongodb} alt="html" />
                        <h3 className="type">MONGODB</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={mysql} alt="html" />
                        <h3 className="type">MYSQL</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={node} alt="html" />
                        <h3 className="type">NODEJS</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={php} alt="html" />
                        <h3 className="type">PHP</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={postgres} alt="html" />
                        <h3 className="type">POSTGRESQL</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={sass} alt="html" />
                        <h3 className="type">SASS</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={spring} alt="html" />
                        <h3 className="type">SPRING</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={typescript} alt="html" />
                        <h3 className="type">TYPESCRIPT</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={vue} alt="html" />
                        <h3 className="type">VUE</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={next} alt="html" />
                        <h3 className="type">NEXTJS</h3>
                    </div>
                    <div className="skill--box" style={skillBoxStyle}>
                        <img src={material} alt="html" />
                        <h3 className="type">MATERIAL UI</h3>
                    </div>
                         </Marquee>

</div>
    </div>



    </div>
  )
}

export default Skills