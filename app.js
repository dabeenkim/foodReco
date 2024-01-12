//Express.js를 express변수에 할당한다.
const express = require("express");
const app = express();

const routes = require("./routes");

app.use(express.json());
app.use("/api", routes);
