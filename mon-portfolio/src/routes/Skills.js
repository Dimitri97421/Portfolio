import React from 'react';
import htmlLogo from '../img/html.png'
import sassLogo from '../img/sass.png'
import jsLogo from '../img/js.png'
import reactLogo from '../img/react.png'
import reduxLogo from '../img/redux.png'
import bootstrapLogo from '../img/bootstrap.png'
import gitHubLogo from '../img/github.png'
import swaggerLogo from '../img/swagger.png'
import figmaLogo from '../img/figma.png'

const Skills = () => {

  return (
    <section className='skills_section'>
      <div className='skills'>
        <h2>Languages</h2>
        <div className='skills_list'>
          <div className='items'>
            <img src={htmlLogo} alt='logo html'/>
            <p>HTML</p>
          </div>
          <div className='items'>
          <img src={sassLogo} alt='logo sass'/>
            <p>CSS/SASS</p>
          </div>
          <div className='items'>
            <img src={jsLogo} alt='logo javasript'/>
            <p>JAVASCRIPT</p>
          </div>
        </div>
      </div>

      <div className='skills'>
        <h2>Frameworks</h2>
        <div className='skills_list'>
          <div className='items'>
            <img src={reactLogo} alt='logo react'/>
            <p>REACT</p>
          </div>
          <div className='items'>
            <img src={reduxLogo} alt='logo redux'/>
            <p>REDUX</p>
          </div>
          <div className='items'>
            <img src={bootstrapLogo} alt='logo bootstrap'/>
            <p>BOOTSTRAP</p>
          </div>
        </div>
      </div>

      <div className='skills'>
        <h2>Outils</h2>
        <div className='skills_list'>
          <div className='items'>
            <img src={gitHubLogo} alt='logo github'/>
            <p>GITHUB</p>
          </div>
          <div className='items'>
            <img src={swaggerLogo} alt='logo swagger'/>
            <p>SWAGGER</p>
          </div>
          <div className='items'>
            <img src={figmaLogo} alt='logo figma'/>
            <p>FIGMA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;