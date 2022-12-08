import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext }  from "../App";

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const { isSignedIn, setIsSignedIn } = useContext(AuthContext);

  const onSubmit = (data) => {
    const LoginForm = document.getElementById("LoginForm")
    const formData = new FormData(LoginForm)
    axios.post('http://localhost:3001//sessions/create', formData )
    .then((response) => {
      sessionStorage.setItem('AUTHORITY', response.headers.authority)
      setIsSignedIn(true)
      console.log(response.data.currentUser)
      navigate('/Home')
    })
  }

  return (
    <>
      <Form id="LoginForm" name="LoginForm" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" placeholder="Email address"/>
          <Form.Text className="text-muted">
            input your email-address
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" name="password" placeholder="password"/>
        </Form.Group>
        <Button variant="outline-danger" type="submit">登録</Button>
      </Form>
    </>
  )
}

export default Login