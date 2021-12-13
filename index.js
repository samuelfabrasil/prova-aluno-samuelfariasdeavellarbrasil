const express = require('express')
const bp = require('body-parser')
const app = express()
const port = 3300

const data_pedido = "10/10/1007"
const cliente_id = 1

const cliente = require('./CRUDs/ClienteCRUD')
const pedido = require('./CRUDs/PedidoCRUD')
const produto = require('./CRUDs/ProdutoCRUD')
const produto_produto = require('./CRUDs/Pedido_ProdutoCRUD')

cliente.select()
cliente.selectById(1)
cliente.insert(5,'Samuel')
cliente.update(5,'Samuel Farias')
cliente.remove(5)
/*
pedido.select()
pedido.selectById(1)
pedido.insert('10/10/1007',1)
pedido.update(3,'10/10/1008',1)
pedido.remove(3)

produto.select()
produto.selectById(1)
produto.insert('Leite',10.0)
produto.update(5,'Leite de soja',15.0)
produto.remove(5)
*/
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

require('./routes/index')(app);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})