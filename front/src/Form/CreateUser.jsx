import React, { useState, useEffect } from 'react'
import Header from '../Header'

const CreateUser = () => {
  const CreateUser = document.getElementById("CreateUser")

  const [form, setForm] = useState({name:'', email:'', password:'', password_digest:''});
  const handleSend = (e) => {
    const formData = new FormData(CreateUser)
    fetch("http://localhost:3001//users/create", {
      method: 'POST',
      body: formData
    }).then((response) =>{
      if (!response.ok) {
        console.log("error!")
      }
      const data = response.json()
      data.then(function(datavalue){
        //console.log(datavalue.message)
        //apiのmessageを参照
      })
    })
  }
  const handleChange = (e) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      }
    })
  }
  return (
    <>
      <Header />
      <form id="CreateUser" name="CreateUser" >
        <div>
          <label>
            Name:
            <input type="text" name="nickname" placeholder="nickname" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" placeholder="Email address" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" placeholder="password" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password Confirmation:
            <input type="password" name="password_digest" placeholder="password confirmation" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <input type="button" value="登録" onClick={handleSend}/>
        </div>

      </form>
    </>
  )
}

export default CreateUser