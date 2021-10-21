import axios from 'axios';
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { Redirect } from 'react-router';
import styled from 'styled-components';

const Styles = styled.div`
.addAGroup {
  position: relative;
  display: inline;
  left: 40%;
  top: -28px;
}
.container {
  margin-bottom: -2%;
}
`

const AddAGroup = (props) => {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [redirect, setRedirect] = useState(false);
  const handleClose = () => {
    setShow(false);
  }
  const handleSave = () => {
    handleSubmit(name);
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
    <Styles>

     <div className="container">
      <Button variant="primary" className='addAGroup' onClick={handleShow}>
        Add A Group
      </Button>

      <Modal size="lg" centered show={show} onHide={handleClose} backdrop="static">
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
            Close
          </Button>
          <Button variant="primary" onClick={handleSave} style={{backgroundColor: 'rgb(54 192 208)'}}>
          Save It!
          </Button>
          {redirect === true ? <Redirect to={`/plans?uid=${props.currentUser.uid}&groupName=${name}`}/> : <></>}
        </Modal.Footer>
      </Modal>
    </div>
    </Styles>
  )
}

export default AddAGroup;