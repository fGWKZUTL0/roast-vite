import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "../App"

import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'

function Post() {
  const [show, setShow] = useState(false)
  const username = sessionStorage.getItem('username')
  const Authority = sessionStorage.getItem('AUTHORITY')

  const handleSubmit = () => {
    const postTweet = document.getElementById("postTweet")
    const formData = new FormData(postTweet)
    axios.post('http://localhost:3001//tweets/create', formData)
    .then(res => {
      console.log(res.data.status)
    })
    setShow(false)
  }

  const handleClose = () => setShow(false)

  const handleShow = () => setShow(true)

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
              <Form.Control as="textarea" rows={3} name="tweet" placeholder="What's up?"/>
            </Form.Group>
            <input type="hidden" name="username" value={username? username : ""}/>
            <input type="hidden" name="AUTHORITY" value={Authority? Authority : ""}/>
          </Form>
          <Stack direction="horizontal" >
            <Button variant="primary ms-auto" onClick={handleSubmit}>
              Tweet
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Post