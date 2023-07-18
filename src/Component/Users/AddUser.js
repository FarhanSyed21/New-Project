import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModule from '../UI/ErrorModule';

const AddUser = (props) => {
    const[enteredUserName, setEnteredUserName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const[enteredCollege, setEnteredCollege] = useState('');
    const[error, setError] = useState();

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
    const collegeChangeHandler = (event) => {
        setEnteredCollege(event.target.value)
    }
  const addUser = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 || enteredCollege.trim().length === 0){
        setError({
            title: "Invalid Input",
            message: "Please enter the name, age and college correctly"
        })
        return;
    }
    if(+enteredAge < 1){
        setError({
            title: "Invalid age",
            message: "Please enter the age correctly (should be greater than 0)"
        })
        return
    }
    props.onAddUser(enteredUserName , enteredAge, enteredCollege);
    setEnteredUserName('')
    setEnteredAge('')
    setEnteredCollege('')
  };
  const errorHandler = () => {
    setError(null);
  }

  return (
    <>
        {error && <ErrorModule title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className ={classes.input}>
        <form onSubmit={addUser}>
            <label htmlFor="userName">UserName</label>
            <input type="text" id="userName" value={enteredUserName} onChange={userNameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
            <label htmlFor="college">College</label>
            <input type="text" id="college" value={enteredCollege} onChange={collegeChangeHandler}/>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    </>
  );
};

export default AddUser;
