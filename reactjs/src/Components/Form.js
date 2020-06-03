import React from "react";

const Form = ({ user, onChangeInput, search }) => {
  return (
    <form onSubmit={search}>
      <input
        type="search"
        placeholder="Insira o usuário e pressione Enter"
        value={user}
        onChange={onChangeInput}
      />
    </form>
  );
};

export default Form;
