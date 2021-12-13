const pedidos_produtos = require('../controllers/pedido_produtos_controller');
module.exports = (app) => {
   app.post('/pedidos_produtos', pedidos_produtos.post);
   app.put('/pedidos_produtos/:id', pedidos_produtos.put);
   app.delete('/pedidos_produtos/:id', pedidos_produtos.delete);
   app.get('/pedidos_produtos', pedidos_produtos.get);
   app.get('/pedidos_produtos/:id', pedidos_produtos.getById);
}