const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000
//const db = require('./config/keys').pool;
const getc = require('./routes/api/child');
const geti = require('./routes/api/indicators');


app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req, res) => {
    res.send(`Base Route`)
});

app.get("/api/child/id/:child_id", getc.getChildById);
app.get("/api/child/status/:child_id/", getc.getchildStatusbyId);
app.get("/api/child/all", getc.getAllChildren);
app.get("/api/awc/:awc_id", getc.getChildByAWC);
app.get("/api/indicators/wfh/girl/:flag", geti.getGirlsWFH);
app.get("/api/indicators/wfh/boy/:flag", geti.getBoysWFH);
app.get("/api/indicators/lfa/girl/:flag", geti.getGirlsLFA);
app.get("/api/indicators/lfa/boy/:flag", geti.getBoysLFA);
app.get("/api/indicators/wfa/girl", geti.getGirlsWFA);
app.get("/api/indicators/wfa/boy", geti.getBoysWFA);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })