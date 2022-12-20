import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "../../App"
import { TweetContext } from "../Home"

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'

const Post = () => {
  const [show, setShow] = useState(false)
  const { token } = useContext(AuthContext)
  const {tweets, setTweets } = useContext(TweetContext)

  const handleClose = () => setShow(false)

  const handleShow = () => setShow(true)

  const handleSubmit = () => {
    const postTweet = document.getElementById("postTweet")
    const formData = new FormData(postTweet)
    axios.post('http://localhost:3001//tweets/create', formData, token)
    .then(res => {
      //console.log(res.data.status)
      setTweets([res.data.tweet[0], ...tweets])
      console.log(res.data.tweet.id)
    })
    setShow(false)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Tweet
      </Button>

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