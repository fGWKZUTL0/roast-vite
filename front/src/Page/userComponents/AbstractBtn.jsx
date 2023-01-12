import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import { AuthContext } from "../../App"

import { useSelector } from 'react-redux'
import { selectUser } from '../../reducer/userSlice'

import FollowBtn from './FollowBtn'
import UnfollowBtn from './UnfollowBtn'
import EditModal from './EditModal'

const AbstractBtn = (props) => {
  const { token } = useContext(AuthContext)
  const user = useSelector( selectUser )
  const [isFollowing, setIsFollowing] = useState("")

  useEffect(() => {
    axios.post('http://localhost:3001/follow/index', { user_id: user.id } , token)
    .then(res => {
      setIsFollowing(res.data.relation)
    })
  }, [])

  return (
    <>
      {(() => {
        if (isFollowing === "same") {
          return <EditModal />
        } else if(isFollowing === "following") {
          return <UnfollowBtn updateFollowed={props.updateFollowed} setIsFollowing={setIsFollowing} />
        } else if(isFollowing === "notFollowing"){
          return <FollowBtn updateFollowed={props.updateFollowed} setIsFollowing={setIsFollowing} />
        }
      })()}
    </>
  )
}

export default AbstractBtn