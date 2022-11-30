import React, { useState, useEffect } from 'react'
import Header from '../Header'

const Login = () => {

  return (
    <>
      <Header />
      <form action="/" method="post">
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
          <input type="submit" value="Submit" />
        </div>

      </form>
    </>
  )
}

export default Login