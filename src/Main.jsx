import React from "react";
import gc from './img/hero.png.png';
import './Style.css';


const Main=()=>{
	return(
		<>


<main>
  <div class="intro">
    <h1>A Software Developer</h1>
    <p>Developer with eager to do sth in the feild of web.</p>
    <button>Learn More</button>
  </div>
  <div class="achievements">
    <div class="work">
    
      <p class="work-heading">Projects</p>
      <p class="work-text">I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects. I have worked on many projects and I am very proud of them. I am a very good developer and I am always looking for new projects.</p>
    </div>
    <div class="work">
     
      <p class="work-heading">Skills</p>
      <p class="work-text">I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.I have a lot of skills and I am very good at them. I am very good at programming and I am always looking for new skills.</p>
    </div>
    <div class="work">
    
      <p class="work-heading">Network</p>
      <p class="work-text">I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skil.I have a lot of network skills and I am very good at them. I am very good at networking and I am always looking for new network skil. He</p>
    </div>
  </div>
  <div class="about-me">
    <div class="about-me-text">
      <h2>About Me</h2>
      <p>I am a web developer and I love to create websites. I am a very good developer and I am always looking for new projects. I am a very good developer and I am always looking for new projects. </p>
    </div>
    <img id="chitra" src={gc} alt=""/>
 
  </div>
</main>
		
		</>
	);
}

export default Main;




