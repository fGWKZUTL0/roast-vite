import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "../../App"

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import { useNavigate } from 'react-router-dom'

const EditModal = (props) => {
  const { token } = useContext(AuthContext)
  const navigate = useNavigate()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)

  const handleShow = () => setShow(true)

  const handleSubmit = () => {
    const userEdit = document.getElementById("userEdit")
    const formData = new FormData(userEdit)
    axios.put('http://localhost:3001//auth', formData, token)
    .then(res => {
      if(res.data.success === true){
        props.setThisuser(res.data.data)
      }
    })
    setShow(false)
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>Edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tweet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="userEdit">
            <Form.Group
              className="mb-3"
            >
              <Form.Label>bio</Form.Label>
              <Form.Control as="textarea" rows={3} name="bio" placeholder="input your bio"/>
            </Form.Group>
          </Form>
          <Stack direction="horizontal" >
            <Button variant="primary ms-auto" onClick={handleSubmit}>
              Update
            </Button>
          </Stack>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default EditModal