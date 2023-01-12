import React from "react"

const dateFormat = (datetime) =>{
  const time = new Date(datetime)
  const dateTimeFormat = new Intl.DateTimeFormat('jp', { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
  return dateTimeFormat.format(time)
}

export default dateFormat