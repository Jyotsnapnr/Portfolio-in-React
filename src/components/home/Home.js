import React from 'react'
import developer from  '../../assets/developer.webp';
import './home.css';

function Home() {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info ">
    
     
      <div className="wrapper">
      <h2 className="app__header-h2">Hi everyone<span className="waving-hand">👋</span></h2>
</div>
      <div className="line">
<h1 className="app__header-h1 pop-outin"> I'm Jyotsna Koova </h1>
</div>


      <p style={{ margin: '2rem 0' }}>

      A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with 
      JavaScript / Reactjs / Nodejs 
 </p>
      <a href="#skills"><button type="button" className="explore__button">Explore Me</button></a>
   
</div>
    <div className="app__wrapper_img">
      <img src={developer} alt="header_img" className="header-img"/>
    </div>
  </div>
  )
}

export default Home