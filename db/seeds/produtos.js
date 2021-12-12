
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PRODUTO').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PRODUTO').insert([
        {id: 1, descricao: 'Arroz', preco: 5.54},
        {id: 2, descricao: 'Feijão', preco: 8.90},
        {id: 3, descricao: 'Macarão', preco: 6.00},
        {id: 4, descricao: 'Oleo de soja', preco: 5.00},
      ]);
    });
};
