import React from 'react';
import PhotoProfile from '../img/moi.jpg'
import PhotoP8 from '../img/projet8.png'
import PhotoP6 from '../img/projet6.png'
import PhotoP11 from '../img/projet11.png'
import PhotoP4 from '../img/projet4.png'
import Modale  from '../composants/Modale'

const Projects = () => {
  return (
    <section id="projects_section" className='projects_section'>
        <div className='projects_list'>
            <Modale img={PhotoP8} title='Application web de location en React' description={<>Implémentation du front end d'une application React moderne et réactive<br/><br/>Compétences : React / React Router<br/><br/>Lien GitHub : https://github.com/Dimitri97421/Projet_8_OC</>}/>
            <Modale img={PhotoP6} title='Page web dynamique en JavaScript' description={<>Création d'un site web dynamique en communiquant avec une API<br/><br/>Compétences : JavaScript <br/><br/>Lien GitHub : https://github.com/Dimitri97421/Projet_6_OC</>}/>
            <Modale img={PhotoP11} title='Application bancaire avec React et Redux ' description={<>Mise en oeuvre du frond end d'une application bancaire via des appels API et avec Redux pour la gestion des données<br/><br/>Compétences : React / Redux / Swagger<br/><br/>Lien GitHub : https://github.com/Dimitri97421/Projet_11_OC</>}/>
            <Modale img={PhotoP4} title='Site mobile avec des animations CSS' description={<>Intégration d'une maquette en mobile-first afin d'améliorer l'interface d'un site avec des animations CSS<br/><br/>Compétences : HTML / SCSS / GIT<br/><br/>Lien GitHub : https://github.com/Dimitri97421/Projet_4_OC</>}/>
        </div>
    </section>
  );
};

export default Projects;