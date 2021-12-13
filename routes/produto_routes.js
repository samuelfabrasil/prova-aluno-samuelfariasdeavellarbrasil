const produto_controller = require('../controllers/produto_controller');
module.exports = (app) => {
   app.post('/produtos', produto_controller.post);
   app.put('/produtos/:id', produto_controller.put);
   app.delete('/produtos/:id', produto_controller.delete);
   app.get('/produtos', produto_controller.get);
   app.get('/produtos/:id', produto_controller.getById);
}