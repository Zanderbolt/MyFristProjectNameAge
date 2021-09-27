import "./UserItem.css";

function UserItem(props) {  
  
  function onDeleteUser() {
    props.onDeleteUser(props.id)
  }

  return (
    <div onClick={onDeleteUser}>      
      <div className="user-item">
        {props.children[0]} ({props.children[1]} years old)
      </div>
    </div>
  );
}

export default UserItem;
