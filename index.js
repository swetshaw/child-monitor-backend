const express = require("express");
const bodyParser = require('body-parser')
const app = express()
const port = 3000
//const db = require('./config/keys').pool;
const getc = require('./routes/api/child');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
    res.send(`Base Route`)
});

app.get("/child/id/:child_id", getc.getChild);
app.get("/child/all", getc.getAllChildren);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })