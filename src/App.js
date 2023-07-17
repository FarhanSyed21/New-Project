import { useState } from 'react';
import AddUser from './Component/Users/AddUser';
import UsersList from './Component/Users/UsersList';

function App() {
  const[usersList, setUsersList] = useState([])
  
  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: uName, age: uAge, id: Math.random().toString() }]
    })
  }

  return (
    <div className="App">
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
