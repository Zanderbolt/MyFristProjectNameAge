import UserItem from "./UserItem";
import "./UserList.css";

function UserList(props) {
  return (
    <div>
      <ul className="user-list">
        <h2> List Of Users </h2>
        {props.users.map((user) => (
          <UserItem key={user.id} id={user.id}>
            {user.name}
            {user.age}
          </UserItem>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
