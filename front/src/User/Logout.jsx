import React, { useState, useEffect } from 'react'
import { Navigate } from "react-router-dom"

const Logout = (props) => {
  fetch('http://localhost:3001/sessions/destroy', {
    method: 'GET'
  })
  .then(response => {
    if (!response.ok) {
      console.error('サーバーエラー')
    }
    // ここに成功時の処理を記述
    const data = response.json()
    data.then(function(datavalue){
      console.log(datavalue.message)
      props.setIsSignedIn(false)
      //apiのmessageを参照
    })
  })
  .catch(error => {
    console.error('通信に失敗しました', error)
  })

  return (
    <>
      <Navigate replace to="/Login" />
    </>
  )
}

export default Logout