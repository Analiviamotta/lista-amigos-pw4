import React, { useState } from "react";

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
        <form onSubmit={addFriend}>
          <label htmlFor="name">Nome: </label>
          <input
            type="text"
            onChange={(e) => onChangeFriend("name", e.target.value)}
            required
          />

          <label htmlFor="idade">Idade: </label>
          <input
            type="text"
            onChange={(e) => onChangeFriend("idade", e.target.value)}
            required
          />

          <label htmlFor="tel">Telefone: </label>
          <input
            type="tel"
            onChange={(e) => onChangeFriend("tel", e.target.value)}
            required
          />
          <button type="submit">Adicionar amigo</button>
        
        </form>
        {renderFriendsList()}
      </header>
    </div>
  );
}

export default App;
