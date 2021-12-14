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
}
function insert(id,data_pedido,cliente_id){
    knex("TB_PEDIDO")
      .insert({ id,data_pedido, cliente_id})
}
function update(id,data_pedido,cliente_id){
    knex("TB_PEDIDO")
      .where({ id })
      .update({
        data_pedido: data_pedido,
        cliente_id : cliente_id
      })
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
}