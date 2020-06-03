const mysql = require("mysql");

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node-mysql",
});

conexao.connect((err) => {
  if (err) {
    return console.error(err);
  }

  console.log("Conectado");
});

module.exports = conexao;
