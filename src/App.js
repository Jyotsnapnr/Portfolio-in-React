import React from 'react'
import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import ProjectPaper from './components/projects/ProjectPaper';
import Skills from './components/skills/Skills';
import 'bootstrap/dist/css/bootstrap.min.css';
import Education from './components/education/Education';
import Experience from './components/Experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
   <Home />
   <Skills />
<ProjectPaper />
<Experience />
<Education />

<Contact />
<Footer />
    </div>
  );
}

export default App;
