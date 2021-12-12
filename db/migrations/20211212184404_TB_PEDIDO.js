exports.up = function(knex) {
    return knex.schema
      .createTable('TB_PEDIDO', function (table) {
        table.increments('id').primary();
        table.date('data_pedido');
        table.integer('cliente_id').unsigned();
        table.foreign('cliente_id').references('TB_CLIENTE.id');
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('TB_PEDIDO');
  };