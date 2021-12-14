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
cliente.select()
cliente.update(5,'Samuel Farias')
cliente.select()
cliente.remove(5)
cliente.select()

console.log("------------------")

 pedido.select()
 pedido.selectById(1)
 pedido.insert(3,'10/10/1007',1)
 pedido.select()
pedido.update(3,'10/10/1008',1)
pedido.select()
pedido.remove(3)
pedido.select()

console.log("------------------")

produto.select()
produto.selectById(1)
produto.insert(5,'Leite',10.0)
pedido.select()
produto.update(5,'Leite de soja',15.0)
pedido.select()
produto.remove(5)
pedido.select()

console.log("------------------")

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

require('./routes/index')(app);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})