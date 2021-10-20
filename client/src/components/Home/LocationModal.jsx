import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';

function LocationModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <Button variant="primary" onClick={handleShow}>
        Update Prefered Airport
      </Button>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Click to Update your Airport of Choice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         This is where the form shall go
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} style={{backgroundColor: 'rgb(54 192 208)'}}>
            Save It!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LocationModal;



















// https://www.ccra.com/airport-codes/