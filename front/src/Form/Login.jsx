import React, { useState, useEffect } from 'react'
import Header from '../Header'

const Login = () => {

  return (
    <>
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
          <button type="submit">Go</button>
        </div>

      </form>
    </>
  )
}

export default Login