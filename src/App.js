import "./App.css";
import UserForm from "./components/NewUser/UserForm";
import Users from "./components/user/Users";
import { useState } from "react";

function App() {
  const [userList, setUserList] = useState([
    {
      id: 'g1',
      name: "Christian",
      age: '27',
    },
    {
      id: 'g2',
      name: "Miguel",
      age: '28',
    },
  ]);

  function addNewUserHandler(newUser) {        
    setUserList(prevUsers => {      
      return [newUser, ...prevUsers]
    })
  }

  return (
    <div>      
      <UserForm onAddNewUser={addNewUserHandler}/>
      <Users users={userList}/>
    </div>
  );
}

export default App;
