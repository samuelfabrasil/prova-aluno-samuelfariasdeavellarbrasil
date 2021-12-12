const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const knexConfig = require("./db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);

app.get("/clientes", (req, res) => {
  knex("TB_CLIENTE")
    .select({
      id: "id",
      nome: "nome",
    })
    .then((cliente) => {
      return res.json(cliente);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.get("/clientes/:id", (req, res) => {
  var id = req.params.id;
  knex("TB_CLIENTE")
    .select({
      id: "id",
      nome: "nome",
    })
    .where({ id })
    .then((cliente) => {
      return res.json(cliente[0]);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.get("/pedidos", (req, res) => {
  knex("TB_PEDIDO")
    .select({
      id: "id",
      data_pedido: "data_pedido",
      cliente_id: "cliente_id",
    })
    .then((pedido) => {
      return res.json(pedido);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.get("/pedidos/:id", (req, res) => {
  var id = req.params.id;
  knex("TB_PEDIDO")
    .select({
      id: "id",
      data_pedido: "data_pedido",
      cliente_id: "cliente_id",
    })
    .where({ id })
    .then((pedido) => {
      return res.json(pedido[0]);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.get("/produtos", (req, res) => {
  knex("TB_PRODUTO")
    .select({
      id: "id",
      descricao: "descricao",
      preco: "preco",
    })
    .then((produto) => {
      return res.json(produto);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.get("/produtos/:id", (req, res) => {
  var id = req.params.id;
  knex("TB_PRODUTO")
    .select({
      id: "id",
      descricao: "descricao",
      preco: "preco",
    })
    .where({ id })
    .then((produto) => {
      return res.json(produto[0]);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.get("/pedidos_produtos", (req, res) => {
  knex("TB_PEDIDO_PRODUTO")
    .select({
      id: "id",
      pedido_id: "pedido_id",
      produto_id: "produto_id",
      quantidade: "quantidade",
      quantidadexpreco: "quantidade_X_preco_produto",
    })
    .then((pedido_produto) => {
      return res.json(pedido_produto);
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.get("/pedidos_produtos/:id", (req, res) => {
    var id = req.params.id;
    knex("TB_PEDIDO_PRODUTO")
      .select({
        id: "id",
      pedido_id: "pedido_id",
      produto_id: "produto_id",
      quantidade: "quantidade",
      quantidadexpreco: "quantidade_X_preco"
      })
      .where({ id })
      .then((pedido_produto) => {
        return res.json(pedido_produto[0]);
      })
      .catch((err) => {
        console.error(err);
        return res.json({
          success: false,
          message: "An error occurred, please try again later.",
        });
      });
  });

app.post("/clientes", (req, res) => {
  const nome = req.body.nome ? req.body.nome : "";

  if (!nome) {
    return res.json({ success: false, message: "nome é necessario" });
  }

  knex("TB_CLIENTE")
    .insert({ nome })
    .then((id) => {
      knex("TB_CLIENTE")
        .select({
          id: "id",
          nome: "nome",
        })
        .where({ id })
        .then((cliente) => {
          return res.json(cliente[0]);
        });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.post("/clientes", (req, res) => {
  const nome = req.body.nome ? req.body.nome : "";

  if (!nome) {
    return res.json({ success: false, message: "nome é necessario" });
  }

  knex("TB_CLIENTE")
    .insert({ nome })
    .then((id) => {
      knex("TB_CLIENTE")
        .select({
          id: "id",
          nome: "nome",
        })
        .where({ id })
        .then((cliente) => {
          return res.json(cliente[0]);
        });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.put("/clientes/:id", (req, res) => {
  var id = req.params.id;
  const nome = req.body.nome ? req.body.nome : "";

  if (!nome) {
    return res.json({ success: false, message: "nome é necessario" });
  }
  knex("TB_CLIENTE")
    .where({ id })
    .update({
      nome: nome,
    })
    .then(() => {
      knex("TB_CLIENTE")
        .select({
          id: "id",
          nome: "nome",
        })
        .where({ id })
        .then((cliente) => {
          return res.json(cliente[0]);
        });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});

app.delete("/clientes/:id", (req, res) => {
  var id = req.params.id;

  if (!nome) {
    return res.json({ success: false, message: "nome é necessario" });
  }
  knex("TB_CLIENTE")
    .where({ id })
    .del()
    .then(() => {
      return res.json({
        success: true,
        message: "OK",
      });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.delete("/pedidos/:id", (req, res) => {
  var id = req.params.id;

  if (!nome) {
    return res.json({ success: false, message: "nome é necessario" });
  }
  knex("TB_PEDIDOS")
    .where({ id })
    .del()
    .then(() => {
      return res.json({
        success: true,
        message: "OK",
      });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.delete("/produtos/:id", (req, res) => {
  var id = req.params.id;

  if (!nome) {
    return res.json({ success: false, message: "nome é necessario" });
  }
  knex("TB_PRODUTO")
    .where({ id })
    .del()
    .then(() => {
      return res.json({
        success: true,
        message: "OK",
      });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
app.delete("/pedidos_produtos/:id", (req, res) => {
  var id = req.params.id;

  if (!nome) {
    return res.json({ success: false, message: "nome é necessario" });
  }
  knex("TB_PEDIDO_PRODUTO")
    .where({ id })
    .del()
    .then(() => {
      return res.json({
        success: true,
        message: "OK",
      });
    })
    .catch((err) => {
      console.error(err);
      return res.json({
        success: false,
        message: "An error occurred, please try again later.",
      });
    });
});
