const pedido_controller = require('../controllers/pedido_controller');
module.exports = (app) => {
   app.post('/pedidos', pedido_controller.post);
   app.put('/pedidos/:id', pedido_controller.put);
   app.delete('/pedidos/:id', pedido_controller.delete);
   app.get('/pedidos', pedido_controller.get);
   app.get('/pedidos/:id', pedido_controller.getById);
}