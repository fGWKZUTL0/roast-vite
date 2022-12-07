import React, { useState, useEffect } from 'react'

const Post = () => {
  const CreateUser = document.getElementById("CreateUser")

  const [form, setForm] = useState({tweet: ""});
  const handleSend = (e) => {
    const formData = new FormData(CreateUser)
    fetch("http://localhost:3001//tweets/create", {
      method: 'POST',
      body: formData
    }).then((response) =>{
      if (!response.ok) {
        console.log("error!")
      }
      const data = response.json()
      data.then(function(datavalue){
        console.log(datavalue.message)
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
      <form action="/" method="post">
        <div>
          <label>
            Tweet:
            <textarea name="tweet" placeholder="What's up?" onChange={handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Let's Tweet</button>
        </div>
      </form>
    </>
  )
}

export default Post