const express = require("express");
const app = express();
require("dotenv").config();
const PORT=process.env.PORT || 5001

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const db = require("./db");

app.get("/", async (req, res)=> {
  res.send("Hi this is backend ");
});


const personRoutes=require("./Routes/personRoutes");
app.use("/person",personRoutes);

const menuRoutes=require("./Routes/menuRoutes");
app.use("/restaurant",menuRoutes);


app.listen(PORT, () => {
  console.log("live on port 5001");
});
