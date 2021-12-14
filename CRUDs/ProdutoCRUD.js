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
    knex("TB_PRODUTO")
      .select({
        id: "id",
        descricao: "descricao",
        preco: "preco",
      })
      .then((produto) => {
        return console.log(produto);
      })
      .catch((err) => {
        console.error(err);
      });
}
function selectById(id){
    knex("TB_PRODUTO")
      .select({
        id: "id",
        descricao: "descricao",
        preco: "preco",
      })
      .where({ id })
      .then((produto) => {
        return console.log(produto[0]);
    })
    .catch((err) => {
      console.error(err);
    });
}
function insert(id,descricao,preco){
    knex("TB_PRODUTO")
      .insert({ id,descricao, preco})
      .catch((err) => {
        console.error(err);
      });
}
function update(id,descricao,preco){
    knex("TB_PRODUTO")
      .where({ id })
      .update({
        descricao: descricao,
        preco : preco
      })
      .catch((err) => {
        console.error(err);
      });
}
function remove(id){
    knex("TB_PRODUTO")
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