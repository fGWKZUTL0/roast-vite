import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from "react-router-dom"
import { AuthContext }  from "../App";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EditModal from './userComponents/EditModal'
import SpinnerTag from './components/SpinnerTag'

const User = () => {
  const navigate = useNavigate()

  const {name} = useParams()

  const [thisuser, setThisuser ] = useState([])// thisuserはログイン中のユーザーと異なる
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
            setThisuser(res.data.user)
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
            <Col>{thisuser.nickname}</Col>
            <Col><EditModal thisuser={setThisuser}/></Col>
          </Row>
          <Row>
            <Col>{thisuser.bio}</Col>
          </Row>
        </Container>
      }
    </>
  )
}

export default User