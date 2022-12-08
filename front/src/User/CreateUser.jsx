import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios'

const CreateUser = () => {
  const CreateUser = document.getElementById("CreateUser")

  const [form, setForm] = useState({name:'', email:'', password:'', password_digest:''});
  const handleSend = (e) => {
    const formData = new FormData(CreateUser)
    try {
      axios.post('http://localhost:3001//users/create', formData)
      .then(res => {
        console.log(res.data.message)
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
      <Form id="CreateUser" name="CreateUser" >
        <Form.Group className="mb-3">
          <Form.Label>Name:</Form.Label>
          <Form.Control type="text" name="nickname" placeholder="nickname" onChange={handleChange}/>
          <Form.Text className="text-muted">
            input your nickname
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
          <Form.Control type="password" name="password_digest" placeholder="password  confirmation" onChange={handleChange}/>
        </Form.Group>
        <Button variant="outline-danger" onClick={handleSend}>登録</Button>
      </Form>
    </>
  )
}

export default CreateUser