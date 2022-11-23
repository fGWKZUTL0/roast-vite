import { useEffect, useState } from 'react'
import React from 'react';
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';

function App() {
  const urlAPI = "localhost:3001/tweets/index";
  const [datas, setDatas] = useState([]);
  console.log(axios.defaults.baseURL)
  useEffect( () => {
    axios.get(urlAPI).then((res)=> {
      setDatas(res.data);
    })
  },[])
  console.log(datas)
}

export default App
