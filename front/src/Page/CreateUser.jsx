import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

import Spinner from 'react-bootstrap/Spinner'

const CreateUser = () => {
  const [isLoading, setIsLoading] = useState(false)

  const CreateUser = document.getElementById("CreateUser")

  const [form, setForm] = useState({nickname:'', email:'', password:'', password_digest:''});
  const handleSend = (e) => {
    setIsLoading(true)
    const formData = new FormData(CreateUser)
    try {
      axios.post('http://localhost:3001//auth', formData)
      .then(res => {
        setIsLoading(false)
      })
    } catch (error) {
      console.log("error!")
    }
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
      {isLoading ? 
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner> 
        : 
        <Form id="CreateUser" name="CreateUser" >
          <Form.Group className="mb-3">
            <Form.Label>Nickname:</Form.Label>
            <Form.Control type="text" name="nickname" placeholder="Nickname" onChange={handleChange}/>
            <Form.Text className="text-muted">
              input your Nickname
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control type="email" name="email" placeholder="Email address" onChange={handleChange}/>
            <Form.Text className="text-muted">
              input your email-address
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password:</Form.Label>
            <Form.Control type="password" name="password" placeholder="password" onChange={handleChange}/>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password Confirmation:</Form.Label>
            <Form.Control type="password" name="password_confirmation" placeholder="password  confirmation" onChange={handleChange}/>
          </Form.Group>
          <Button variant="outline-danger" onClick={handleSend}>登録</Button>
        </Form>
      }
    </>
  )
}

export default CreateUser