import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { AuthContext }  from "../App";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from './components/Image'
import AbstractBtn from './userComponents/AbstractBtn'
import Following from './userComponents/Following'
import Followed from './userComponents/Followed'
import SpinnerTag from './components/SpinnerTag'

import { useSelector, useDispatch } from 'react-redux'
import { initUser, selectUser } from '../reducer/userSlice'

const User = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [following, setFollowing] = useState(0)
  const [followed, setFollowed] = useState(0)
  const user = useSelector( selectUser )
  const {name} = useParams()

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
            setFollowing(res.data.following)
            setFollowed(res.data.followed)
            dispatch(initUser(res.data.user))
            console.log(user)
          }
          setIsLoading(false)
        })
      } catch (error) {
        setIsError(true)
      }
    }
    fetchData()
  }, [name])

  const updateFollowed = (num) =>{
    setFollowed(followed + num)
  }

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
                <Image src={user.image.url} width={100} height={100} roundedCircle />
              </Col>
              <Col><span className="fs-4">{user.nickname}</span> <span className="text-muted">@{user.name}</span></Col>
              <Col> <Following count={following}/> <Followed count={followed}/></Col>
            </Col>
            <Col className="text-center">
              <AbstractBtn updateFollowed={updateFollowed}/>
            </Col>
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