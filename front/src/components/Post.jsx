import React, { useState } from 'react';
import axios from 'axios'

import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Post() {
  const [show, setShow] = useState(false);
  
  const handleClose = () => {
    const postTweet = document.getElementById("postTweet")
    const formData = new FormData(postTweet)
    axios.post('http://localhost:3001//tweets/create', formData)
    .then(res => {
      console.log(res.data.message)
    })
    setShow(false);
  }
  
  const handleShow = () => setShow(true);

  return (
    <>
      <Link className="nav-link btn-link rounded-pill text-center" onClick={handleShow}>
        Tweet
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="postTweet">
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} placeholder="What's up?"/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Post