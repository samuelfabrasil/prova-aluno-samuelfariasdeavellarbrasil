const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);
exports.get =("/produtos",(req, res) => {
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
exports.getById =("/produtos/:id",(req, res) => {
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
exports.post =("/produtos",(req, res, next) => {
    const descricao = req.body.descricao ? req.body.descricao : "";
    const preco = req.body.preco ? req.body.preco : "";

    if (!descricao) {
      return res.json({ success: false, message: "nome é necessario" });
    }

    knex("TB_PRODUTO")
      .insert({ descricao, preco })
      .then((id) => {
        knex("TB_PRODUTO")
          .select({
            id: "id",
            descricao: "descricao",
            preco : "preco"
          })
          .where({ id })
          .then((produto) => {
            return res.json(produto[0]);
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
exports.put =("/produtos/:id",(req, res,next) => {
    var id = req.params.id;
    const descricao = req.body.descricao ? req.body.descricao : "";
    const preco = req.body.preco ? req.body.preco : "";
    knex("TB_PRODUTO")
      .where({ id })
      .update({
        descricao: descricao,
        preco : preco
      })
      .then(() => {
        knex("TB_PRODUTO")
          .select({
            id: "id",
            descricao: "descricao",
            preco: "preco"
          })
          .where({ id })
          .then((produto) => {
            return res.json(produto[0]);
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
exports.delete =("/produtos/:id",(req, res) => {
    var id = req.params.id;
    
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
