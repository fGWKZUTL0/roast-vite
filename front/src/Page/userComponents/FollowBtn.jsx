import React, { useState, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "../../App"

import Button from 'react-bootstrap/Button'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../reducer/userSlice'

const FollowBtn = (props) => {
  const { token } = useContext(AuthContext)
  const user = useSelector( selectUser )

  const handleSubmit = () => {
    axios.post('http://localhost:3001/follow/create', { user_id: user.id } , token)
    .then(res => {
      if(res.data.status === "success"){
        props.setIsFollowing("following")
      }
    })
  }

  return (
    <>
      <Button variant="outline-primary" onClick={handleSubmit}>Follow</Button>
    </>
  )
}

export default FollowBtn