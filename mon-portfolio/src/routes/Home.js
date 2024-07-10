import React, { useState } from 'react';
import ModaleContent from '../composants/ModaleContent';
import PhotoProfile from '../img/moi.jpg'
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <section id="accueil_section" className='accueil_section'>
        <div className='presentation'>
            <h2>
                Bonjour, je suis Dimitri !
            </h2>
            <p>
            <br/>Après une 2ème année de licence en informatique, j'ai suivi une formation chez OpenClassrooms qui m'a permis d'acquérir des compétences solides dans le développement web, notamment en front end. Ce cursus intensif m'a permis d'acquérir une compréhension approfondie des technologies modernes du web grâce à la réalisation de projets concrets.<br/><br/>
                Lieu : Rouen, France<br/><br/>
            </p>
            <Button variant="primary" onClick={handleOpen}>Contact</Button>
            <Modal show={isOpen} onHide={handleClose} centered>
              <ModaleContent 
                img={null}
                title='Contactez-moi' 
                description={
                  <div>
                    <p>Cliquez sur le mail pour envoyer un message : </p>
                    <FontAwesomeIcon icon={farEnvelope} /> <a href="mailto:dimitri.dg9@gmail.com">dimitri.dg9@gmail.com</a>
                  </div>
                }
                onClose={handleClose}
              />
            </Modal>
        </div>
        <img src={PhotoProfile} alt='photo de moi'/>
    </section>
  );
};

export default Home;