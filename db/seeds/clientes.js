
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_CLIENTE').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_CLIENTE').insert([
        {id: 1, nome: 'José'},
        {id: 2, nome: 'Maria'},
        {id: 3, nome: 'João'},
        {id: 4, nome: 'Ana'}
      ]);
    });
};
