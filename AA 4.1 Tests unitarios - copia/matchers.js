//Ejercicio A
function veintemenoscinco(){
    return 20 - 5;
}
//Ejercicio B
function Vehiculo() {
  return {
    marca: "Toyota",
    año: 2018
  };
}

//Ejercicio C
function getFalse() {
  return false;
}

function getTrue() {
  return true;
}

function getIndefinido() {
  return "Indefinido";
}
//Ejercicio D
function NumeroMayor() {
  return 12;
}

function NumeroMenor() {
  return 3;
}

function NumeroExacto() {
  return 42;
}
//Ejercicio E
function Frase() {
  return "Hola, mi fruta favorita es la Manzana.";
}
//Ejercicio F

function ListaDeFrutas() {
  return ["Manzana", "Banana", "Mango", "Uva"];
}

//Ejercicio G
function getNumeroEjemplo() {
  return 15; // número fijo para el ejemplo
}
//Ejercicio H
function getUsuario(valido) {
  return new Promise((resolve, reject) => {
    if (valido) {
      resolve({
        usuario: "Carla",
        edad: 30
      });
    } else {
      reject("Usuario inválido");
    }
  });
}

module.exports = {
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
};
