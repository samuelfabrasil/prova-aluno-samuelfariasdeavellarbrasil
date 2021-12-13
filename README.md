<h1>Como usar a API(CRUD):</h1>
<p>Esse tutorial visa guia-lo na utilização da API criada para a prova 06 da disciplina de banco de dados</p>
<p>O funcionamento base da API está ligado a mudança de uma URL padrão via postman</p>

http://localhost:3300/nome_da_tabela

<p>A tabela abaixo mostra como você deve se referir a cada tabela na URL</p>

| Nome tabela | Nome na url |
| ------------- | ------------- |
| TB_CLIENTE  | clientes  |
| TB_PEDIDO | pedidos  |
| TB_PRODUTO | produtos  |
| TB_PEDIDO_PRODUTO | pedidos_produtos |

<h2>Ler uma tabela</h2>
<ṕ>Selecione o método GET no postman e use a seguinte URL</p>
http://localhost:3300/nome_da_tabela

<h2>Ler um registro</h2>
<ṕ>Selecione o método GET no postman e use a seguinte URL</p>
http://localhost:3300/nome_da_tabela/id_do_registro

<h2>Adicionar um registro</h2>
<ṕ>Selecione o método POST no postman, use a seguinte URL e coloque no corpo da requisição um JSON com os campos do registro</p>
http://localhost:3300/nome_da_tabela

<h2>Atualizando um registro</h2>
<ṕ>Selecione o método PUT no postman, use a seguinte URL, coloque no corpo da requisição um JSON com os campos do registro com os valores atuais e altere o valor dos campos que desejar
</p>
http://localhost:3300/nome_da_tabela/id_do_registro

<h2>Atualizando um registro</h2>
<ṕ>Selecione o método DELETE no postman, use a seguinte URL</p>
http://localhost:3300/nome_da_tabela/id_do_registro


