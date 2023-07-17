import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModule from '../UI/ErrorModule';

const AddUser = (props) => {
    const[enteredUserName, setEnteredUserName] = useState('');
    const[enteredAge, setEnteredAge] = useState('');
    const[error, setError] = useState();

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }
  const addUser = (event) => {
    event.preventDefault();
    if(enteredUserName.trim().length === 0 || enteredAge.trim().length === 0){
        setError({
            title: "Invalid Input",
            message: "Please enter the name and age correctly"
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
    props.onAddUser(enteredUserName , enteredAge);
    setEnteredUserName('')
    setEnteredAge('')
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
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    </>
  );
};

export default AddUser;
