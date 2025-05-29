const { 
  veintemenoscinco, 
  Vehiculo, 
  getFalse, 
  getTrue, 
  getIndefinido, 
  NumeroExacto, 
  NumeroMayor, 
  NumeroMenor, 
  Frase,
  ListaDeFrutas,
  getNumeroEjemplo,
  getUsuario 
} = require('./matchers');

//Ejercicio A
test('20 menos 5 es 15', () => {
  expect(veintemenoscinco()).toBe(15);
});

//Ejercicio B
test('El objeto Vehiculo debe ser igual al esperado', () => {
  const VehiculoComparado = { marca: "Toyota", año: 2018 };
  expect(Vehiculo()).toEqual(VehiculoComparado);
});

//Ejercicio C
test('Tiene que retornar false', () => {
  expect(getFalse()).toBe(false);
});

test('Tiene que retornar true', () => {
  expect(getTrue()).toBe(true);
});

test('Tiene que retornar un valor definido', () => {
  expect(getIndefinido()).toBeDefined();
});

//Ejercicio D
test('El número debe ser mayor que 10', () => {
  expect(NumeroMayor()).toBeGreaterThan(10);
});

test('El número debe ser menor que 5', () => {
  expect(NumeroMenor()).toBeLessThan(5);
});

test('El número debe ser mayor o igual que 42', () => {
  expect(NumeroExacto()).toBeGreaterThanOrEqual(42);
});

//Ejercicio E
test('La frase debe contener la palabra "fruta"', () => {
  expect(Frase()).toMatch(/fruta/);
});

test('La frase debe terminar con la palabra "Manzana."', () => {
  expect(Frase()).toMatch(/Manzana\.$/);
});

//Ejercicio F
test('La lista de frutas debe contener "Manzana"', () => {
  expect(ListaDeFrutas()).toContain("Manzana");
});

test('La lista de frutas debe contener "Mango"', () => {
  expect(ListaDeFrutas()).toContain("Mango");
});

//Ejercicio G
test('El número no debe ser igual a 10', () => {
  expect(getNumeroEjemplo()).not.toBe(10);
});

//Ejercicio H
test('Debe resolverse con un objeto de usuario', () => {
  return expect(getUsuario(true)).resolves.toEqual({ usuario: "Carla", edad: 30 });
});

test('Debe rechazarse con mensaje de error', () => {
  return expect(getUsuario(false)).rejects.toBe("Usuario inválido");
});
