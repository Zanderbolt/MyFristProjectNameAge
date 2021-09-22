import "./UserItem.css";

function UserItem(props) {
  function clickTest() {}

  return (
    <li onClick={clickTest}>
      {console.log(props)}
      <div className="user-item">
        {/* <div className="user-item__age">ID:  </div> */}
        <div className="user-item__age">Age: {props.children[1]} </div>
        <div className="user-item__name">
          <h2> {props.children[0]}</h2>
        </div>
      </div>
    </li>
  );
}

export default UserItem;
