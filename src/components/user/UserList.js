import UserItem from "./UserItem";
import "./UserList.css";
import Card from "../UI/Card";
import styles from './UsersList.module.css'


function UserList(props) {
  return (
    <Card className={styles.user}>
      <ul>
        <h2> List Of Users </h2>
        {props.users.map((user) => (
          <li key={user.id}> 
            <UserItem
              key={user.id}
              id={user.id}
              onDeleteUser={props.onDeleteUser}
            >
              {user.name}
              {user.age}
            </UserItem>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UserList;
