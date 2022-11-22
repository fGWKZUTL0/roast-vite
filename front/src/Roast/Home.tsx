import React, { useEffect, useState } from 'react';
import axios from 'axios';

  type Data = {
    user_name: string;
    time: string
  }
  function Home(){
    /*
    const urlAPI = "https://xxxxxxxxxxx";
    const [datas, setDatas] = useState([])
    console.log(axios.defaults.baseURL)
    useEffect( () => {
      axios.get(urlAPI).then((res)=> {
        setDatas(res.data)
      })
    },[])
    console.log(datas)
    */
    return (
      <div className="Home">
        <h1>This is Home</h1>
        <div>

        </div>
      </div>
    )
  }

  export default Home;