const assert = require("assert");

function holaMundo() {
  return "Hola Mundo";
}

assert.strictEqual(holaMundo(), "Hola Mundo");

console.log("Prueba unitaria pasada correctamente");
