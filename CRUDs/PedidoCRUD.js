const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);

module.exports = {
    select,
    selectById,
    insert,
    update,
    remove,
}

function select(){
    knex("TB_PEDIDO")
      .select({
        id: "id",
        data_pedido: "data_pedido",
        cliente_id: "cliente_id",
      })
      .then((pedido) => {
        return console.log(pedido);
      })
      .catch((err) => {
        console.error(err);
      });
}
function selectById(id){
    knex("TB_PEDIDO")
      .select({
        id: "id",
        data_pedido: "data_pedido",
        cliente_id: "cliente_id",
      })
      .where({ id })
      .then((pedido) => {
        return console.log(pedido[0]);
    })
    .catch((err) => {
      console.error(err);
    });
}
function insert(id,data_pedido,cliente_id){
    knex("TB_PEDIDO")
      .insert({ id,data_pedido, cliente_id})
      .catch((err) => {
        console.error(err);
      });
}
function update(id,data_pedido,cliente_id){
    knex("TB_PEDIDO")
      .where({ id })
      .update({
        data_pedido: data_pedido,
        cliente_id : cliente_id
      })
      .catch((err) => {
        console.error(err);
      });
}
function remove(id){
    knex("TB_PEDIDO")
      .where({ id })
      .del()
      .then(() => {
        return console.log({
          success: true,
          message: "OK",
        });
    })
    .catch((err) => {
      console.error(err);
    });
}