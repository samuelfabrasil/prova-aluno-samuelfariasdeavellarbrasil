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
    })
    .catch((err) => {
      console.error(err);
    });
    ;
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
    })
    .catch((err) => {
      console.error(err);
    });
}
function insert(id,pedido_id,produto_id,quantidade,quantidadexpreco) {
  knex("TB_PEDIDO_PRODUTO")
    .insert({ id,pedido_id,produto_id,quantidade,quantidadexpreco })
    .catch((err) => {
      console.error(err);
    });
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
    .catch((err) => {
      console.error(err);
    });
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
    })
    .catch((err) => {
      console.error(err);
    });
}
