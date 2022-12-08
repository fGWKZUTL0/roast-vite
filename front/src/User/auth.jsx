import React, { useContext } from "react"

const AuthContext = React.createContext({
  isSignedIn: false
})

export default AuthContext
/*
// ログインユーザーの取得
useEffect(() => {
  let result = ""
  fetch('http://localhost:3001//sessions/index', {
    method: 'GET'
  })
  .then(response => {
    if (!response.ok) {
      console.error('サーバーエラー')
    }
    // ここに成功時の処理を記述
    const data = response.json()
    result = data.message
    setIsSignedIn(true)
  })
  .catch(error => {
    console.error('通信に失敗しました', error)
  })
  console.log(result)
  if(result === "success"){
    console.log("success")
    return true
  }else{
    console.log("failure")
    return false
  }
})
*/