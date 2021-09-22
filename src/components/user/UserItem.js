import "./UserItem.css";

function UserItem(props) {
  function clickTest() {}

  return (
    <li onClick={clickTest}>
      {console.log(props)}
      <div className="user-item">
        <div className="user-item__age">ID: {props.key}</div>
        <div className="user-item__age">Age: {props.age}</div>
        <div className="user-item__name">
          <h2> {props.name}</h2>
        </div>
      </div>
    </li>
  );
}

export default UserItem;
