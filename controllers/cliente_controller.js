const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);
exports.get =("/clientes",(req, res,next) => {
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

exports.getById =("/clientes/:id",(req, res, next) => {
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

exports.post =("/clientes",(req, res, next) => {
    const nome = req.body.nome ? req.body.nome : "";
    console.log(req.body);
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

exports.put =("/clientes/:id",(req, res,next) => {
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
exports.delete =("/clientes/:id",(req, res, next) => {
    var id = req.params.id;

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
