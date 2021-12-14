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
      .catch((err) => {
        console.error(err);
      });
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
    .catch((err) => {
      console.error(err);
    });
}
 function insert(id,nome){
    knex("TB_CLIENTE")
      .insert({ id,nome})
      .catch((err) => {
        console.error(err);
      });
}
 function update(id,nome){
    knex("TB_CLIENTE")
      .where({ id })
      .update({
        nome : nome
      })
      .catch((err) => {
        console.error(err);
      });
      
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
    .catch((err) => {
      console.error(err);
    });
}