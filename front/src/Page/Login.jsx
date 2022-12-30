import React, { useState, useEffect, useContext } from 'react'
import axios from "axios"
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext }  from "../App";

import { useDispatch } from 'react-redux'
import { initCurrentuser } from '../reducer/currentUserSlice'

import SpinnerTag from './components/SpinnerTag'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const { setIsSignedIn, token, setToken } = useContext(AuthContext)

  const onSubmit = (data) => {

    setIsLoading(true)
    const LoginForm = document.getElementById("LoginForm")
    const formData = new FormData(LoginForm)

    axios.post('http://localhost:3001/auth/sign_in', formData )
    .then((response) => {
      setToken({
        headers:{
          'uid': response.headers['uid'],
          'access-token': response.headers['access-token'],
          'client': response.headers['client'],
          'expiry': response.headers['expiry'],
          'token-type': response.headers['token-type'],
        }
      })
      dispatch(initCurrentuser(response.data.data))
      console.log(response.data.data)
      localStorage.setItem('currentUserName', response.data.data.name)
      localStorage.setItem('uid', response.headers['uid'])
      localStorage.setItem('access-token', response.headers['access-token'])
      localStorage.setItem('client', response.headers['client'])
      localStorage.setItem('expiry', response.headers['expiry'])
      localStorage.setItem('token-type', response.headers['token-type'])
      setIsSignedIn(true)
      setIsLoading(false)
      navigate('/Home')
    })
  }

  return (
    <>
    { isLoading ? 
      <SpinnerTag />
      : 
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