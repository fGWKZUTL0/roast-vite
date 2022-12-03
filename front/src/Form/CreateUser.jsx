import React, { useState, useEffect } from 'react'
import Header from '../Header'

const CreateUser = () => {
  const [form, setForm] = useState({name:'', email:'', password:'', password_digest:''});
  const handleSend = (e) => {
    console.log(form)
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
      <form action="http://localhost:3001//users/create" method="post" name="CreateUser" onSubmit={handleSend}>
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
          <input type="submit" value="Submit"/>
        </div>

      </form>
    </>
  )
}

export default CreateUser