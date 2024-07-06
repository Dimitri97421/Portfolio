import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModaleContent = ({ img, title, description, onClose }) => {
    return (
      <>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={img} alt='Image d un projet' className='img-fluid' />
          <p>{description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Fermer</Button>
        </Modal.Footer>
      </>
    );
  };

  export default ModaleContent;