import React, { useState, useEffect } from "react";
import Form from "./Components/Form";
import Perfil from "./Components/Perfil";

import api from "./services/api";

import "./App.css";

const App = () => {
  const [dados, setDados] = useState({});
  const [user, setUser] = useState("");

  useEffect(() => {
    api.get("/facebook").then((response) => setDados(response.data));
  }, [user]);

  const onChange = (event) => {
    setUser(event.target.value);
  };

  const searchUser = (event) => {
    event.preventDefault();

    if (user !== "") {
      try {
        api
          .get(`/${user}`)
          .then((response) => setDados(response.data))
          .catch(() => alert("Usuário não encontrado"));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="container">
      <Form user={user} onChangeInput={onChange} search={searchUser} />
      <Perfil dados={dados} />
    </div>
  );
};

export default App;
