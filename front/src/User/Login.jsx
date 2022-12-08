import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const LoginForm = document.getElementById("LoginForm")

  const [form, setForm] = useState({name:'', email:'', password:'', password_digest:''});
  const handleSend = (e) => {
    const formData = new FormData(LoginForm)
    try {
      axios.post('http://localhost:3001//sessions/create', formData , { withCredentials: true } )
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
      <Form id="LoginForm" name="LoginForm" >
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
        <Button variant="outline-danger" onClick={handleSend}>登録</Button>
      </Form>
    </>
  )
}

export default Login