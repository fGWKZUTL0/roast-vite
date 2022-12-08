import React, { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';

const Login = () => {
  const CreateUser = document.getElementById("LoginForm")

  const [form, setForm] = useState({name:'', email:'', password:'', password_digest:''});
  const handleSend = (e) => {
    const formData = new FormData(CreateUser)
    fetch("http://localhost:3001//users/create", {
      method: 'POST',
      body: formData
    }).then((response) =>{
      if (!response.ok) {
        console.log("error!")
      }
      const data = response.json()
      data.then(function(datavalue){
        console.log(datavalue.message)
        //apiのmessageを参照
      })
    })
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