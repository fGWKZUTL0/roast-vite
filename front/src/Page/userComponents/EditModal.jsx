import React, { useState, useRef, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "../../App"

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import Stack from 'react-bootstrap/Stack'
import { IconContext } from "react-icons"
import { BsFillCameraFill } from "react-icons/bs"

import { useSelector, useDispatch } from 'react-redux'
import { initCurrentuser } from '../../reducer/currentUserSlice'
import { initUser, selectUser } from '../../reducer/userSlice'

const EditModal = (props) => {
  const { token } = useContext(AuthContext)
  const dispatch = useDispatch()
  const user = useSelector( selectUser )
  
  const [form, setForm] = useState({nickname: user.nickname, bio: user.bio});
  const [show, setShow] = useState(false)

  const inputFileRef = useRef(null)

  const handleClose = () => setShow(false)

  const handleShow = () => setShow(true)

  const handleSubmit = () => {
    const userEdit = document.getElementById("userEdit")
    const formData = new FormData(userEdit)
    axios.put('http://localhost:3001//auth', formData, token)
    .then(res => {
      if(res.data.status === "success"){
        dispatch(initUser(res.data.data))
        dispatch(initCurrentuser(res.data.data))
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
      <Button variant="info" onClick={handleShow}>Edit</Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form id="userEdit">
            <Form.Group className="mb-3">
              <Form.Label>nickname</Form.Label>
              <Form.Control type="text" rows={3} name="nickname" value={form.nickname} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>bio</Form.Label>
              <Form.Control as="textarea" rows={3} name="bio" value={form.bio === null ? "" : form.bio} onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>
                <div>
                  <IconContext.Provider value={{ color: '#ccc', size: '50px' }}>
                    <BsFillCameraFill onClick={() => inputFileRef.current?.click()}/>
                  </IconContext.Provider>
                </div>
                <div>
                  <input ref={inputFileRef} style={{ display: 'none' }} type="file" name="image" />
                </div>
              </Form.Label>
              <Form.Label className="p-2 fs-5">Select icon</Form.Label>
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
  )
}

export default EditModal