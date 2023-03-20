import React, { useState } from 'react';
import Card from '../UI/Card';
import styles from './AddUser.module.css';
import Button from '../UI/Button';

function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  function usernameHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function ageHandler(event) {
    setEnteredAge(event.target.value);
  }
  function addUserHandler(event) {
    event.preventDefault();
    if (enteredAge.trim().length == 0 || enteredUsername.trim().length == 0) {
      return false;
    }
    props.onAddUser({
      id: Math.random(),
      username: enteredUsername,
      age: enteredAge,
    });
    setEnteredUsername('');
    setEnteredAge('');
  }
  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label>Username</label>
        <input type="text" onChange={usernameHandler} value={enteredUsername} />
        <label>Age</label>
        <input type="Number" onChange={ageHandler} value={enteredAge} />
        <Button title="Submit" type="submit" onClick={addUserHandler} />
      </form>
    </Card>
  );
}
export default AddUser;
