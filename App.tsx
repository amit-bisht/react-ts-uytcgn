import React, { useState } from 'react';
import './style.css';
import AddUser from './components/users/AddUser';
import UserList from './components/users/UserList';

export default function App() {
  var DUMMY_DATA = [
    { id: 1, username: 'Amit', age: 12 },
    { id: 2, username: 'Raj', age: 12 },
  ];
  const [users, setUser] = useState(DUMMY_DATA);
  function addUserHandler(userinfo) {
    setUser((prevData) => {
      return [...prevData, userinfo];
    });
  }
  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </div>
  );
}
