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
    axios.post('http://localhost:3001//sessions/create', formData )
    .then((response) => {
      if(response.data.message === "success"){
        sessionStorage.setItem('AUTHORITY', response.headers.authority)
        setIsSignedIn(true)
        sessionStorage.setItem('username', response.data.user.username)
        setUsername(response.data.user.username)
        //console.log(response.data.user.username)
        setIsLoading(false)
        navigate('/Home')
      }else{
        console.log(response.data.message)
      }
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
        <Button variant="outline-danger" type="submit">登録</Button>
      </Form>
    }
    </>
  )
}

export default Login