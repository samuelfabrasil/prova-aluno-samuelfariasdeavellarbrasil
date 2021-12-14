const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);

module.exports = {
  select,
  selectById,
  insert,
  update,
  remove,
};

function select() {
  knex("TB_PEDIDO_PRODUTO")
    .select({
      id: "id",
      pedido_id: "pedido_id",
      produto_id: "produto_id",
      quantidade: "quantidade",
      quantidadexpreco: "quantidadexpreco",
    })
    .then((cliente) => {
      return console.log(cliente);
    });
}
function selectById(id) {
  knex("TB_PEDIDO_PRODUTO")
    .select({
      id: "id",
      pedido_id: "pedido_id",
      produto_id: "produto_id",
      quantidade: "quantidade",
      quantidadexpreco: "quantidadexpreco",
    })
    .where({ id })
    .then((cliente) => {
      return console.log(cliente[0]);
    });
}
function insert(id,pedido_id,produto_id,quantidade,quantidadexpreco) {
  knex("TB_PEDIDO_PRODUTO")
    .insert({ id,pedido_id,produto_id,quantidade,quantidadexpreco });
}
function update(id, pedido_id,produto_id,quantidade,quantidadexpreco) {
  knex("TB_PEDIDO_PRODUTO")
    .where({ id })
    .update({
        id: id,
        pedido_id: pedido_id,
        produto_id: produto_id,
        quantidade: quantidade,
        quantidadexpreco: quantidadexpreco
    })
}
function remove(id) {
  knex("TB_PEDIDO_PRODUTO")
    .where({ id })
    .del()
    .then(() => {
      return console.log({
        success: true,
        message: "OK",
      });
    });
}
