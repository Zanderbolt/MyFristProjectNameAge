import "./UserItem.css";

function UserItem(props) {
  return (
    <li>
      <div className="user-item">
      <div className="user-item__age">Age: {props.age}</div>      
        <div className="user-item__name">
          <h2> {props.name}</h2>
        </div>    
      </div>
    </li>
  );
}

export default UserItem;
