import React from 'react';
import Card from '../UI/Card';
import styles from './UserList.module.css';
function UserList(props) {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return <li key={user.id}>{`${user.username} ${user.age}`}</li>;
        })}
      </ul>
    </Card>
  );
}
export default UserList;
