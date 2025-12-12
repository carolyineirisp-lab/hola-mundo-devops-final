const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).send("Hola Mundo DevOps");
});

// Solo levantar el servidor si NO estamos en test
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`App corriendo en puerto ${PORT}`);
  });
}

module.exports = app;
