
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('TB_PEDIDO').del()
    .then(function () {
      // Inserts seed entries
      return knex('TB_PEDIDO').insert([
        {id: 1, data_pedido: '10/02/2021', cliente_id: 1 },
        {id: 2, data_pedido: '20/05/2021', cliente_id: 2 },
      ]);
    });
};
