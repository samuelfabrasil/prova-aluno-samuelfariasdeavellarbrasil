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
    knex("TB_CLIENTE")
      .select({
        id: "id",    
        nome:"nome"
      })
      .then((cliente) => {
        return console.log(cliente);
      })
}
function selectById(id){
    knex("TB_CLIENTE")
      .select({
        id: "id",
        nome:"nome"
      })
      .where({ id })
      .then((cliente) => {
        return console.log(cliente[0]);
    })
}
function insert(id,nome){
    knex("TB_CLIENTE")
      .insert({ id,nome})
      .then((id) => {
        knex("TB_CLIENTE")
          .select({
            id: "id",
            nome:"nome"
          })
          .where({ id })
          .then((cliente) => {
            return console(cliente[0]);
          });
    })
}
function update(id,nome){
    knex("TB_CLIENTE")
      .where({ id })
      .update({
        nome : nome
      })
      .then(() => {
        knex("TB_CLIENTE")
          .select({
            id: "id",
            nome:"nome"
          })
          .where({ id })
          .then((cliente) => {
            return console.log(cliente[0]);
          });
      })
}
function remove(id){
    knex("TB_CLIENTE")
      .where({ id })
      .del()
      .then(() => {
        return console.log({
          success: true,
          message: "OK",
        });
    })
}