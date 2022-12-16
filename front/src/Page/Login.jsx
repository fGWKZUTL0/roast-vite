import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext }  from "../App";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const { setUsername, setIsSignedIn } = useContext(AuthContext);

  const onSubmit = (data) => {

    setIsLoading(true)
    const LoginForm = document.getElementById("LoginForm")
    const formData = new FormData(LoginForm)

    axios.post('http://localhost:3001/auth/sign_in', formData )
    .then((response) => {
      sessionStorage.setItem('uid', response.headers['uid'])
      sessionStorage.setItem('access-token', response.headers['access-token'])
      sessionStorage.setItem('client', response.headers['client'])
      sessionStorage.setItem('expiry', response.headers['expiry'])
      sessionStorage.setItem('token-type', response.headers['token-type'])
      setIsSignedIn(true)
      setIsLoading(false)
      navigate('/Home')
    })
  }

  return (
    <>
    {isLoading ? <p>Loading...</p> : 
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
        <Button variant="outline-danger" type="submit">ログイン</Button>
      </Form>
    }
    </>
  )
}

export default Login