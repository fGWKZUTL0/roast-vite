import React, { useState, useEffect } from 'react'

const Tweet = () => {
  const [tweets, setTweets] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  fetch('http://localhost:3001/tweets/index', {
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

  return (
    <>
      <Header />
      {isLoading ? <p>Loading...</p> : <TweetList tweets={tweets} />}
    </>
  );
}

export default Tweet