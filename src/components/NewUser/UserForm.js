import "./UserForm.css";
import { useState } from "react";
import styles from "./userForm.module.css";
function UserForm(props) {
  function onSubmitHandler(event) {
    event.preventDefault();
    // Input validation
    if (enteredName.trim().length === 0) {
      setNameValid(false);
    }
    if (enteredAge.trim().length === 0) {
      setAgeValid(false);
    }
    if (!enteredName || !enteredAge) return;
    // NameValid ? setNameValid(true) : setNameValid(false);
    // AgeValid ? setAgeValid(true) : setAgeValid(false);

    // if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
    //   setIsValid(false);
    //   return;
    // }

    // Create the new user Object
    const enteredUser = {
      key: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    //Add the New User
    props.onAddNewUser(enteredUser);
    setEnteredName("");
    setEnteredAge("");
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
    if (enteredName.trim().length > 0) setNameValid(true);
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
    if (enteredAge.trim().length > 0) setAgeValid(true);
  }

  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [NameValid, setNameValid] = useState(true);
  const [AgeValid, setAgeValid] = useState(true);

  return (
    <div className="userForm">
      <h2> Add a New User </h2>
      <form onSubmit={onSubmitHandler}>
        <div className={styles["new-user__controls"]}>
          <div
            className={`${styles["new-user__control"]} ${
              !NameValid && styles.invalid
            }`}
          >
            <label> Name </label>
            <input
              onChange={nameChangeHandler}
              type="text"
              value={enteredName}
            />
          </div>
          <div
            className={`${styles["new-user__control"]} ${
              !AgeValid && styles.invalid
            } `}
          >
            <label> Age </label>
            <input
              onChange={ageChangeHandler}
              value={enteredAge}
              type="number"
              min="1"
              step="1"
            />
          </div>
        </div>
        <div className={styles["new-user__action"]}>
          <button type="submit"> Add User </button>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
