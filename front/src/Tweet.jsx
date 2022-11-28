import React, { useState, useEffect } from 'react'

const Tweet = () => {
  fetch('http://localhost:3001/tweets/index', {
    method: 'GET'
  })
  .then(response => {
    if (!response.ok) {
      console.error('サーバーエラー');
    }
    // ここに成功時の処理を記述
  })
  .catch(error => {
    console.error('通信に失敗しました', error);
  });
}

export default Tweet