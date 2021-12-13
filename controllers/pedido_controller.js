const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);
exports.get =("/pedidos", (req, res) => {
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
  exports.getById=("/pedidos/:id", (req, res) => {
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
  exports.post =("/pedidos",(req, res, next) => {
    const data_pedido = req.body.data_pedido ? req.body.data_pedido : "";
    const cliente_id = req.body.cliente_id ? req.body.cliente_id : "";
    knex("TB_PEDIDO")
      .insert({ data_pedido, cliente_id})
      .then((id) => {
        knex("TB_PEDIDO")
          .select({
            id: "id",
            data_pedido: "data_pedido",
            cliente_id : "cliente_id"
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

exports.put =("/pedidos/:id",(req, res,next) => {
    var id = req.params.id;
    const data_pedido = req.body.data_pedido ? req.body.data_pedido : "";
    const cliente_id = req.body.cliente_id ? req.body.cliente_id : "";

    knex("TB_PEDIDO")
      .where({ id })
      .update({
        data_pedido: data_pedido,
        cliente_id : cliente_id
      })
      .then(() => {
        knex("TB_PEDIDO")
          .select({
            id: "id",
            data_pedido: "data_pedido",
            cliente_id : "cliente_id"
          })
          .where({ id })
          .then((pedido) => {
            return res.json(pedido[0]);
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
  exports.delete=("/pedidos/:id", (req, res) => {
    var id = req.params.id;
  
    knex("TB_PEDIDO")
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