const express = require('express')
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const jwtPassword = "secret";

const port = 3000

const rootRouter = require("./routes/index");

app.use(cors())
app.use(express.json());
app.use("/api/v1",rootRouter);





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})