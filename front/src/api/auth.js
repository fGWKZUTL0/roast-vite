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
  fetch('http://localhost:3001//auth/sessions', {
    method: 'GET'
  })
  .then(response => {
    if (!response.ok) {
      console.error('サーバーエラー')
    }
    // ここに成功時の処理を記述
    const data = response.json()
    setTweets(data)
  })
  .catch(error => {
    console.error('通信に失敗しました', error)
  })

  return 
}