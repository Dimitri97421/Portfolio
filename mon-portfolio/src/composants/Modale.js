import React, { useState } from 'react';
import ModaleContent from './ModaleContent';
import { Modal, Button } from 'react-bootstrap';

const Modale = ({ img, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className='container'>
      <img src={img} alt='Image d un projet' />
      <div className='content_modale'>
        <h3>{title}</h3>
        <Button variant="primary" onClick={handleOpen}>Voir plus</Button>
      </div>
      <Modal show={isOpen} onHide={handleClose} centered>
        <ModaleContent 
          img={img} 
          title={title} 
          description={description} 
          onClose={handleClose} 
        />
      </Modal>
    </div>
  );
};

export default Modale;