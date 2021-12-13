const knexConfig = require("../db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);
exports.get=("/pedidos_produtos", (req, res) => {
    knex("TB_PEDIDO_PRODUTO")
      .select({
        id: "id",
        pedido_id: "pedido_id",
        produto_id: "produto_id",
        quantidade: "quantidade",
        quantidadexpreco: "quantidade_X_preco_produto",
      })
      .then((pedido_produto) => {
        return res.json(pedido_produto);
      })
      .catch((err) => {
        console.error(err);
        return res.json({
          success: false,
          message: "An error occurred, please try again later.",
        });
      });
  });
  exports.getById=("/pedidos_produtos/:id", (req, res) => {
      var id = req.params.id;
      knex("TB_PEDIDO_PRODUTO")
        .select({
        id: "id",
        pedido_id: "pedido_id",
        produto_id: "produto_id",
        quantidade: "quantidade",
        quantidadexpreco: "quantidade_X_preco_produto"
        })
        .where({ id })
        .then((pedido_produto) => {
          return res.json(pedido_produto);
        })
        .catch((err) => {
          console.error(err);
          return res.json({
            success: false,
            message: "An error occurred, please try again later.",
          });
        });
    });
    exports.post =("/pedidos_produtos",(req, res, next) => {
      const id = req.body.id ? req.body.id : "";
      const pedido_id = req.body.pedido_id ? req.body.pedido_id : "";
      const produto_id = req.body.produto_id ? req.body.produto_id : "";
      const quantidade = req.body.quantidade ? req.body.quantidade : "";
      const quantidade_X_preco_produto = req.body.quantidadexpreco ? req.body.quantidadexpreco : "";
      knex("TB_PEDIDO_PRODUTO")
        .insert({id, pedido_id, produto_id, quantidade, quantidade_X_preco_produto })
        .then((id) => {
          knex("TB_PEDIDO_PRODUTO")
            .select({
            id: id,
            pedido_id: "pedido_id",
            produto_id: "produto_id",
            quantidade: "quantidade",
            quantidadexpreco: "quantidade_X_preco_produto"
            })
            .where({ id })
            .then((pedido_produto) => {
              return res.json(pedido_produto);
            });
        })
        .catch((err) => {
          console.error(err);
          return res.json({
            success: false,
            message: "An error occurred, please try again later.",
          });
        });
    });
  
  exports.put =("/pedidos_produtos/:id",(req, res,next) => {
      var id = req.params.id;
      const registro_id = req.body.id ? req.body.id : "";
      const pedido_id = req.body.pedido_id ? req.body.pedido_id : "";
      const produto_id = req.body.produto_id ? req.body.produto_id : "";
      const quantidade = req.body.quantidade ? req.body.quantidade : "";
      const quantidade_X_preco_produto = req.body.quantidadexpreco ? req.body.quantidadexpreco : "";
  
      knex("TB_PEDIDO_PRODUTO")
        .where({id})
        .update({
          id: registro_id,
          pedido_id: pedido_id,
          produto_id: produto_id,
          quantidade: quantidade,
          quantidade_X_preco_produto: quantidade_X_preco_produto
        })
        .then(() => {
          id = registro_id;
          knex("TB_PEDIDO_PRODUTO")
            .select({
              id: "id",
              pedido_id: "pedido_id",
              produto_id: "produto_id",
              quantidade: "quantidade",
              quantidadexpreco: "quantidade_X_preco_produto"
            })
            .where({ id })
            .then((pedido_produto) => {
              return res.json(pedido_produto);
            });
        })
        .catch((err) => {
          console.error(err);
          return res.json({
            success: false,
            message: "An error occurred, please try again later.",
          });
        });
    });
    exports.delete=("/pedidos_produtos/:id", (req, res) => {
        var id = req.params.id;
      
        
        knex("TB_PEDIDO_PRODUTO")
          .where({ id })
          .del()
          .then(() => {
            return res.json({
              success: true,
              message: "OK",
            });
          })
          .catch((err) => {
            console.error(err);
            return res.json({
              success: false,
              message: "An error occurred, please try again later.",
            });
          });
      });
      