import React from 'react';
import PhotoProfile from '../img/moi.jpg'

const Home = () => {
  return (
    <section id="accueil_section" className='accueil_section'>
        <div className='presentation'>
            <h2>
                Bonjour, je suis Dimitri
            </h2>
            <p>
            <br/>Après une 2ème année de licence en informatique, j'ai suivi une formation chez OpenClassrooms qui m'a permis d'acquérir des compétences solides dans le développement web, notamment en front end. Ce cursus intensif m'a permis d'acquérir une compréhension approfondie des technologies modernes du web grâce à la réalisation de projets concrets.<br/><br/>
                Lieu : Rouen, France<br/><br/>
                Contact : dimitri.dg9@gmail.com
            </p>
        </div>
        <img src={PhotoProfile} alt='photo de moi'/>
    </section>
  );
};

export default Home;