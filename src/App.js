import React, {useState, Fragment} from 'react';
import './App.css';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prev) => {
      return [...prev, {id: Math.random().toString(), name: userName, age: userAge}]
    })
  }

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </>
  );
}

export default App;
