const cliente_route = require('./cliente_routes');
const produto_routes = require('./produto_routes');
const pedido_routes = require('./pedido_routes');
const pedido_produtos_routes = require('./pedido_produtos_routes');
module.exports = (app) => {
    cliente_route(app);
    produto_routes(app);
    pedido_routes(app);
    pedido_produtos_routes(app);
}