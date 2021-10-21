import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';

const AddAGroup = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);
  const handleClose = () => {
    handleSubmit(name);
    setShow(false);
  }
  const handleShow = () => setShow(true);

  const handleChange = (e) => setName(e.target.value)
  const handleSubmit = (name) => {
    axios.post('/createGroup', { groupName: name, uid: props.currentUser.uid } )
    .then((response) => {
      console.log("successfully added group", response)
      setRedirect(true)
    })
    .catch((err) => console.log("failed", err));
  }

  return (
    <div className="container">
      <Button variant="primary" onClick={handleShow}>
        Add A Group
      </Button>

      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Input what you're going to call your new group!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form.Group>
           <Form.Label>
             Group Name:
           </Form.Label>
           <Form.Control type='text' onChange={handleChange} value={name} placeholder="name input"/>
         </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose} style={{backgroundColor: 'rgb(54 192 208)'}}>
            Save It!
          </Button>
          {redirect === true ? <Redirect to={`/plans?${props.currentUser.uid}&${name}`}/> : <></>}
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddAGroup;