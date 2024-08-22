import React, { useState } from "react";
import { Form } from "./components/Form";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [friend, setFriend] = useState({ name: "", idade: "", tel: "" });

  function renderFriendsList() {
    return (
      <ul>
        {list.map((item, index) => (
          <li key={index}>
           Nome: {item.name}, Idade: {item.idade}, tel {item.tel}
          </li>
        ))}
      </ul>
    );
  }

  function onChangeFriend(type, value) {
    setFriend({ ...friend, [type]: value });
  }

  function addFriend(e) {
    e.preventDefault();
    setList([...list, friend]);
    setFriend({ name: "", idade: "", tel: "" });
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Lista de amigos</p>
        <Form friend={friend} onChangeFriend={onChangeFriend} onSubmitForm={addFriend}/>
        {renderFriendsList()}
      </header>
    </div>
  );
}

export default App;
