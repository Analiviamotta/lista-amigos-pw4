// External Libraries
import React from "react";

// Styles
import './styles.css'


export const Form = ({
  friend,
  onChangeFriend,
  onSubmitForm,
}) => {
  return (
    <form onSubmit={onSubmitForm} className="form-container">
      <label htmlFor="name">Nome: </label>
      <input
        type="text"
        value={friend.name}
        onChange={(e) => onChangeFriend("name", e.target.value)}
        required
      />

      <label htmlFor="idade">Idade: </label>
      <input
        type="text"
        value={friend.idade}
        onChange={(e) => onChangeFriend("idade", e.target.value)}
        required
      />

      <label htmlFor="tel">Telefone: </label>
      <input
        type="tel"
        value={friend.tel}
        onChange={(e) => onChangeFriend("tel", e.target.value)}
        required
      />

      <button type="submit">Adicionar amigo</button>
    </form>
  );
};
