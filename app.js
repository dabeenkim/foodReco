//Express.js를 express변수에 할당한다.
const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const routes = require("./routes");

const PORT = 3000;

app.use(express.json());
app.use(cookieParser());
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`${PORT} 포트번호로 서버가 실행되었습니다.`);
});

module.exports = app;
