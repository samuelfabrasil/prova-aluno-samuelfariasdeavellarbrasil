const cliente_controller = require('../controllers/cliente_controller');
module.exports = (app) => {
   app.post('/clientes', cliente_controller.post);
   app.put('/clientes/:id', cliente_controller.put);
   app.delete('/clientes/:id', cliente_controller.delete);
   app.get('/clientes', cliente_controller.get);
   app.get('/clientes/:id', cliente_controller.getById);
}