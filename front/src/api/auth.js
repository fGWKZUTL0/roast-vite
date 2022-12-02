import client from "./client"
import Cookies from "js-cookie"

// サインアップ
export const signUp = (params) => {
  return client.post("/auth", params)
}

// サインイン
export const signIn = (params) => {
  return client.post("/auth/sign_in", params)
}

// サインアウト
export const signOut = () => {
  return client.delete("/auth/sign_out", {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  })
}

// ログインユーザーの取得
export const getCurrentUser = () => {
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
}