const express = require("express");
const bd = require("./bd");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/usuarios", (req, res) => {
  bd.query("SELECT * FROM usuarios", (error, response) => {
    if (error) {
      return console.log(error);
    } else {
      res.send(response);
    }
  });
});

app.get("/usuarios/:id", (req, res) => {
  bd.query(
    `SELECT * FROM usuarios WHERE id = ${req.params.id}`,
    (error, response) => {
      if (error) {
        return console.log(error);
      } else {
        res.send(response);
      }
    }
  );
});

app.post("/usuarios", (req, res) => {
  let { nome, email, telefone } = req.body;

  bd.query(
    `INSERT INTO usuarios (nome, email, telefone) VALUES ('${nome}', '${email}', '${telefone}')`,
    (error, response) => {
      if (error) {
        return console.log(error);
      } else {
        res.send(response);
      }
    }
  );
});

app.put("/usuarios/:id", (req, res) => {
  let { nome, email, telefone } = req.body;

  bd.query(
    `UPDATE usuarios SET nome = '${nome}', email = '${email}', telefone = '${telefone}' WHERE id = ${req.params.id}`,
    (error, response) => {
      if (error) {
        return console.log(error);
      } else {
        res.send(response);
      }
    }
  );
});

app.delete("/usuarios/:id", (req, res) => {
  bd.query(
    "DELETE FROM usuarios WHERE id = ?",
    [req.params.id],
    (error, response) => {
      if (error) {
        return console.log(error);
      } else {
        res.send(response);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("Server on");
});
