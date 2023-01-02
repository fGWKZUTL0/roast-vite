import React, { useState, useRef, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "../../App"

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import ModalDialog from 'react-bootstrap/ModalDialog'
import Stack from 'react-bootstrap/Stack'

import { useSelector, useDispatch } from 'react-redux'
import { initUser, selectUser } from '../../reducer/userSlice'

const Follower = (props) => {
  const { token } = useContext(AuthContext)
  const user = useSelector( selectUser )

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleSubmit = () => {
    const userEdit = document.getElementById("userEdit")
    const formData = new FormData(userEdit)
    axios.put('http://localhost:3001//auth', formData, token)
    .then(res => {
      if(res.data.status === "success"){

      }
    })
    setShow(false)
  }

  const handleChange = (e) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }

  return (
    <>
      <span className="text-decoration-underline" onClick={handleShow}>{props.count}follow</span>

      <Modal scrollable={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Following Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
      </Modal>
    </>
  )
}

export default Follower