import "./UserForm.css";
import { useState } from "react";
import styles from "./userForm.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

function UserForm(props) {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [NameValid, setNameValid] = useState(true);
  const [AgeValid, setAgeValid] = useState(true);
  const [error, setError] = useState();

  function onSubmitHandler(event) {
    event.preventDefault();
    // Input validation
    if (enteredName.trim().length === 0) {
      setError({
        title: "Invalid Title",
        message: "Enter a valid Name (non-empty Values).",
      });
      setNameValid(false);
    }
    if (enteredAge.trim().length === 0) {
      setError({
        title: "Invalid Age",
        message: "Enter a valid Age (>0, Non-empty values).",
      });
      setAgeValid(false);
    }
    if (!enteredName || !enteredAge) return;

    // Create the new user Object
    const enteredUser = {
      id: Math.random().toString(),
      name: enteredName,
      age: enteredAge,
    };

    //Add the New User
    props.onAddNewUser(enteredUser);
    //Clean the Inputs
    setEnteredName("");
    setEnteredAge("");
  }

  function nameChangeHandler(event) {
    setEnteredName(event.target.value);
    if (event.target.value !== "") {
      setNameValid(true);
    }
  }

  function ageChangeHandler(event) {
    setEnteredAge(event.target.value);
    if (event.target.value !== "") {
      setAgeValid(true);
    }

    
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={styles.input}>
        <div className="userForm">
          <h2> Add a New User </h2>
          <form onSubmit={onSubmitHandler}>
            <div className={styles["new-user__controls"]}>
              <div
                className={`${styles["new-user__control"]} ${
                  !NameValid && styles.invalid
                }`}
              >
                <label htmlFor="name"> Name </label>
                <input
                  id="name"
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
                <label htmlFor="age"> Age </label>
                <input
                  id="age"
                  onChange={ageChangeHandler}
                  value={enteredAge}
                  type="number"
                  min="1"
                  step="1"
                />
              </div>
            </div>
            <div className={styles["new-user__action"]}>
              <Button type="submit"> Add User </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}

export default UserForm;
