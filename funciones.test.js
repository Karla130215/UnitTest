const test = require("node:test");
const funciones = require("./funciones.js");

test("Calcular descuento", () => {
  expect(funciones.calcularDescuento(1000, 20)).toBe(800);
});

test("Calcular descuento", () => {
  expect(funciones.calcularDescuento(500, 10)).toBe(450);
});

test("Calcular descuento", () => {
  expect(funciones.calcularDescuento(300, 120)).toBe("Porcentaje Invalido");
});


test("Validar Password",()=>{
    expect(funciones.validarPassword("abc12345")).toBe(true);
});

test("Validar Password",()=>{
    expect(funciones.validarPassword("abcdef")).toBe(false);
});

test("Validar Password",()=>{
    expect(funciones.validarPassword("12345678")).toBe(true);
});

test("conversion de celcius a Fareheit"),()=>{
    expect(funciones.celsiusAFahrenheit(0)).toBe(32);
}


