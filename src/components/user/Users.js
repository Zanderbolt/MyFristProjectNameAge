import UserList from "./UserList";
import './Users.css'

function Users(props) {  
  return (
    <div className='users'>         
      <UserList users={props.users} onDeleteUser={props.onDeleteUser} />
    </div>
  );
}

export default Users;
