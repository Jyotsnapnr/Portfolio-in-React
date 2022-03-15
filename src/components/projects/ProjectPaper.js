import React from 'react';
import banana from '../../assets/banana.jpg';
import photo from '../../assets/photo.jpg';
import youtube from '../../assets/youtube.jpg';
import weather from '../../assets/weather.jpg';
import user from '../../assets/user.jpg';
import  quiz from '../../assets/quiz.jpg';
import movie from '../../assets/movie.jpg';
import chat from '../../assets/chat.jpg';
import react from '../../assets/react.svg';
import css3 from '../../assets/css3.svg';
import material from '../../assets/material.png';
import bootstrap from '../../assets/bootstrap.svg';
import axios from '../../assets/axios.png';
import redux from '../../assets/redux.png';
import next from '../../assets/next.png';
import tail from '../../assets/tail.png';
import ant from '../../assets/ant.png';

import './projects.css'

export default function ProjectPaper() {

  return (

    <div className="projects" id="projects">
    <div className="projectsHeader">
<h2>My Projects</h2>
  </div>

    <div className="row row-cols-1 row-cols-md-4 g-4">
  <div className="col">
    <div className="card">
      <img src={banana} className="card-img-top" alt="banana leaf" style={{height:"150px"}}/>
      <div className="card-body">
        <h5 className="card-title">Restaurant Website</h5>
        <h6 className="card-text">
        A beautiful restaurant website made using React. Designed using pure CSS.
        </h6>
        <div className="card-text">
        <img src={react} alt="react" style={{height:"50px"}}/>
        <img src={css3} alt="css3" style={{height:"50px"}}/>
</div>
        <div className="card-text">
       <a href="https://github.com/Jyotsnapnr/Restaurant-Website" target="_blank"><button 
        role="button" 
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", margin: "10px", color:"white"}} 
        >GitHub</button></a> 
         <a href="https://banana-leaf.vercel.app/" target="_blank"><button 
        role="button"
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", color:"white"}} 
        >See Live</button></a> 
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={photo} className="card-img-top" alt="image editor"  style={{height:"130px"}}/>
      <div className="card-body">
        <h5 className="card-title">Image Editing App</h5>
        <h6 className="card-text">
        Simple Image editing app developed using React, tippyjs,framer-motion, react-slick, material-ui etc.
        </h6>
        <div className="card-text">
        <img src={react} alt="react" style={{height:"50px"}}/>
        <img src={css3} alt="css3" style={{height:"50px"}}/>
        <img src={material} alt="mui" style={{height:"50px"}}/>
</div>
        <div className="card-text">
       <a href="https://github.com/Jyotsnapnr/Photo-Editor" target="_blank"><button 
        role="button" 
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", margin: "10px", color:"white"}} 
        >GitHub</button></a> 
         <a href="https:photo-editor-bay.vercel.app/" target="_blank"><button 
        role="button"
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", color:"white"}} 
        >See Live</button></a> 
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={weather} className="card-img-top" alt="weather" style={{height:"130px"}}/>
      <div className="card-body">
        <h5 className="card-title">Weather App</h5>
        <h6 className="card-title">
        Weather forecast systems and applications predict weather conditions based on location.
        </h6>
        <div className="card-text">
        <img src={react} alt="react" style={{height:"50px"}}/>
        <img src={css3} alt="css3" style={{height:"50px"}}/>
        <img src={bootstrap} alt="bootstrap" style={{height:"50px"}}/>
</div>
        <div className="card-text">
       <a href="https://github.com/Jyotsnapnr/Weather-App" target="_blank"><button 
        role="button" 
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", margin: "10px", color:"white"}} 
        >GitHub</button></a> 
         <a href="https://weatherapi-rust.vercel.app" target="_blank"><button 
        role="button"
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", color:"white"}} 
        >See Live</button></a> 
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={youtube} className="card-img-top" alt="youtube"/>
      <div className="card-body">
        <h5 className="card-title">Video Club</h5>
        <h6 className="card-text">
        Video Search and play App built using React and YouTube API.
        </h6>
        <div className="card-text">
        <img src={react} alt="react" style={{height:"50px"}}/>
        <img src={css3} alt="css3" style={{height:"50px"}}/>
        <img src={material} alt="mui" style={{height:"50px"}}/>
        <img src={axios} alt="axios" style={{height:"50px"}}/>
</div>
        <div className="card-text">
       <a href="https://github.com/Jyotsnapnr/VideoApp" target="_blank"><button 
        role="button" 
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", margin: "10px", color:"white"}} 
        >GitHub</button></a> 
         <a href="https://video-app-six.vercel.app" target="_blank"><button 
        role="button"
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", color:"white"}} 
        >See Live</button></a> 
        </div>
      </div>
    </div>
  </div>
</div>

<div className="row row-cols-1 row-cols-md-4 g-4" style={{marginTop:"20px"}}>
  

  <div className="col">
    <div className="card">
      <img src={user} className="card-img-top" alt="user" style={{height:"150px"}}/>
      <div className="card-body">
        <h5 className="card-title">Random User Generator</h5>
        <h6 className="card-text">
        Generates Random user and their information.
        </h6>
        <div className="card-text">
        <img src={react} alt="react" style={{height:"50px"}}/>
        <img src={bootstrap} alt="bootstrap" style={{height:"50px"}}/>
</div>
        <div className="card-text">
       <a href="https://github.com/Jyotsnapnr/random-user" target="_blank"><button 
        role="button" 
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", margin: "10px", color:"white"}} 
        >GitHub</button></a> 
         <a href="https://randomusergene.herokuapp.com/" target="_blank"><button 
        role="button"
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", color:"white"}} 
        >See Live</button></a> 
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src={quiz} className="card-img-top" alt="banana leaf"  style={{height:"150px"}}/>
      <div className="card-body">
        <h5 className="card-title">Quiz App</h5>
        <h6 className="card-text">
        Participate in variety of quizes in various topics and test your knowledge
        </h6>
        <div className="card-text">
        <img src={react} alt="react" style={{height:"50px"}}/>
        <img src={material} alt="mui" style={{height:"50px"}}/>
        <img src={redux} alt="redux" style={{height:"50px"}}/>
</div>
        <div className="card-text">
       <a href="https://github.com/Jyotsnapnr/Let-s-Quiz" target="_blank"><button 
        role="button" 
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", margin: "10px", color:"white"}} 
        >GitHub</button></a> 
         <a href="https:quiz-lemon.vercel.app" target="_blank"><button 
        role="button"
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", color:"white"}} 
        >See Live</button></a> 
        </div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={movie} className="card-img-top" alt="youtube" style={{height:"150px"}}/>
      <div className="card-body">
        <h5 className="card-title">Movie Lab</h5>
        <h6 className="card-text">
        Beautiful website which lists popular movies trending.
        </h6>
        <div className="card-text">
        <img src={next} alt="next" style={{height:"50px"}}/>
        <img src={css3} alt="css3" style={{height:"50px"}}/>
        <img src={tail} alt="tailwind" style={{height:"15px"}}/>
      
</div>
        <div className="card-text">
       <a href="https://github.com/Jyotsnapnr/Movie-lab" target="_blank"><button 
        role="button" 
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", margin: "10px", color:"white"}} 
        >GitHub</button></a> 
         <a href="https://movie-lab-nine.vercel.app/" target="_blank"><button 
        role="button"
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", color:"white"}} 
        >See Live</button></a> 
        </div>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card">
      <img src={chat} className="card-img-top" alt="youtube" style={{height:"170px"}}/>
      <div className="card-body">
        <h5 className="card-title">Chat Application</h5>
        <h6 className="card-text">
        Chat application using react-chat-engine.
        </h6>
        <div className="card-text">
        <img src={react} alt="react" style={{height:"50px"}}/>
        <img src={ant} alt="ant-design" style={{height:"50px"}}/>
      
      
</div>
        <div className="card-text">
       <a href="https://github.com/Jyotsnapnr/ChatApp" target="_blank"><button 
        role="button" 
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", margin: "10px", color:"white"}} 
        >GitHub</button></a> 
         <a href="https://chat-app-tan.vercel.app/" target="_blank"><button 
        role="button"
        className="btn" 
        style={{backgroundColor:"rgb(12, 213, 248)", color:"white"}} 
        >See Live</button></a> 
        </div>
      </div>
    </div>
  </div>


  </div>


 
</div>
  )

}
