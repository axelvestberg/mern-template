const express = require("express");
const cors = require("cors");

const PORT = 5000;
const app = express();
app.use(cors())

app.get("/message", (req, res) => {
  res.send("test message");
});

app.listen(PORT, () => {
 console.log(`Server is listening on port: ${PORT}`);
});