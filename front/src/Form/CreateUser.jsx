import React, { useState, useEffect } from 'react'
import Header from '../Header'

const CreateUser = () => {
  const [name, setName] = useState('');


  return (
    <>
      <Header />
      <form action="/" method="post">
        <div>
          <label>
            Name:
            <input type="text" name="name" placeholder="name" />
          </label>
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" placeholder="Email address" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" placeholder="password" />
          </label>
        </div>
        <div>
          <label>
            Password Confirmation:
            <input type="password" name="password_digest" placeholder="password confirmation" />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>

      </form>
    </>
  )
}

export default CreateUser