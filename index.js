const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hola Mundo DevOps");
});

app.listen(PORT, () => {
  console.log(`App corriendo en puerto ${PORT}`);
});
