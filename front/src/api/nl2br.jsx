import React from "react"

const nl2br = (str) =>{
  const string = str.split('\r\n').map((s, index) =>{
    return(
      <React.Fragment key={index}>
        {s}
        <br />
      </React.Fragment>
    )
  })
  return string
}

export default nl2br