import React, { useState, useContext, useRef } from 'react'
import axios from 'axios'
import { AuthContext } from "../../App"

import Button from 'react-bootstrap/Button'

import { useSelector, useDispatch } from 'react-redux'
import { selectUser } from '../../reducer/userSlice'

const UnfollowBtn = (props) => {
  const [isHover, setIsHover] = useState(false)
  const { token } = useContext(AuthContext)
  const user = useSelector( selectUser )

  const handleSubmit = () => {
    axios.post('http://localhost:3001/follow/destroy', { user_id: user.id } , token)
    .then(res => {
      if(res.data.status === "success"){
        props.setIsFollowing("notFollowing")
        props.updateFollowed(-1)
      }
    })
  }

  return (
    <>
      {isHover?
        <Button onMouseLeave={()=> setIsHover(false)} variant="danger" onClick={handleSubmit}>Remove</Button>
      :
        <Button onMouseEnter={()=> setIsHover(true)} variant="primary">Following</Button>
      }
    </>
  )
}

export default UnfollowBtn