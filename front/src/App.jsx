import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Editor from './Editor';
import Home from './Home';
import CreateUser from './Auth/CreateUser';
import Login from './Auth/Login';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path={`/Home`} element={<Home />} />
        <Route path={`/Editor`} element={<Editor />} />
        <Route path={`/CreateUser`} element={<CreateUser />} />
        <Route path={`/Login`} element={<Login />} />
      </Routes>
    </BrowserRouter>
  )  
}

export default App;