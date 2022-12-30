import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { AuthContext }  from "../App";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from './components/Image'
import EditModal from './userComponents/EditModal'
import SpinnerTag from './components/SpinnerTag'

import { useSelector, useDispatch } from 'react-redux'
import { initUser, selectUser } from '../reducer/userSlice'

const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector( selectUser )

  const {name} = useParams()

  //const [user, setUser ] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const { token } = useContext(AuthContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        axios.post('http://localhost:3001/users/show', { name: name }, token)
        .then(res => {
          if(res.data.success === false){
            navigate("/CreateUser")
          }else{
            dispatch(initUser(res.data.user))
            //setUser(res.data.user)
          }
          setIsLoading(false)
        })
      } catch (error) {
        setIsError(true)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      {isError && <p>Something went wrong. Check the console.</p>}

      {isLoading ? 
        <SpinnerTag />
      : 
        <Container>
          <Row>
            <Col>
              <Col>
                <Image src={user.image.url} roundedCircle />
              </Col>
              <Col><span className="fs-4">{user.nickname}</span></Col>
              <Col><span className="text-secondary">@{user.name}</span></Col>
            </Col>
            <Col className="text-center"><EditModal /></Col>
          </Row>
          <Row>
            <Col>{user.bio}</Col>
          </Row>
        </Container>
      }
    </>
  )
}

export default User