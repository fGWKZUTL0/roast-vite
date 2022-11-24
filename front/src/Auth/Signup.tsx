import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

interface User {
  name: string;
  username: string;
  email: string;
  password: string;
}

function Signup() {
  const [users, setUsers] = useState<User[]>([]);
  const getAllUsers = () => {
    axios
      .get("localhost:3001/users/index/users.json")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={index}>
            {user.username}
            {user.email}
          </div>
        );
      })}
    </div>
  );
}

export default Signup;