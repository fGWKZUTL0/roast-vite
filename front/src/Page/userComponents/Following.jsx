import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { AuthContext } from "../../App"

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import SpinnerTag from '../components/SpinnerTag'
import { Link, useNavigate } from 'react-router-dom'

import { useSelector } from 'react-redux'
import {  selectUser } from '../../reducer/userSlice'

const Following = (props) => {
  const { token } = useContext(AuthContext)
  const user = useSelector( selectUser )
  const [followings, setFollowings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [show, setShow] = useState(false)

  const handleClose = () => {
    setIsLoading(true)
    setShow(false)
  }
  const handleShow = () => {
    axios.post('http://localhost:3001/follow/following', {user_id: user.id}, token)
    .then(res => {
      if(res.data.status === "success"){
        setFollowings(res.data.users)
        setIsLoading(false)
        console.log(followings)
      }
    })
    setShow(true)
  }

  return (
    <>
      <span className="text-decoration-underline" onClick={handleShow}>{props.count}follow</span>

      <Modal scrollable={true} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Following Users</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {      
        isLoading ?
          <SpinnerTag />
        :
          followings.length > 0 ?
            followings.map((follow) => (
              <div key={follow.id} className="row mb-2">
                <div className="col-12">
                  <p className="mb-0">
                    <Link to={"/User/" + follow.name} onClick={handleClose} >{follow.nickname}</Link>
                  </p>
                </div>
              </div>
            ))
          :
            <>There are no following users</>
        }
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Following