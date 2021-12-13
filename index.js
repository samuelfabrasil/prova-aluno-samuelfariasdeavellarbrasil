const express = require('express')
const bp = require('body-parser')
const app = express()
const port = 3000

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

require('./routes/index')(app);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

/*const knexConfig = require("./db/knexfile");
const knex = require("knex")(knexConfig[process.env.NODE_ENV]);
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require('./routes/index')(app);
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});*/


