/*function resta (a,b){
    return a -b ;
}

if (resta(a,b)!==-3){
    console.log('error en la operacion de 2 menos 5')
}*/

const resta = (a, b) => {
    return a/b;
}

if (resta(0,0)!==-0){
    console.log('La resta de 0 menos 0 es igual a 0')
}
console.assert(
    resta (2,5) ===3,
    'La resta de 2 menos 5 debe ser -3'
);

console.log('La resta de 2 menos 5 debe ser -3', resta (2,5));

/*
(numeros, enteros, enteros seguros(number.MAX_SAFE_INTEGER),)

1._ normal
*/
console.log('Resta normal (2 - 5):', resta(2, 5));        // 5

/*
2._ decimaleS
*/
console.log('Resta decimales (5.5 - 3.2):', resta(5.5, 3.2)); // 2.3

/*
3._ Frontera (uso Number.MAX_SAFE_INTEGER)
*/
console.log('Frontera (MAX_SAFE_INTEGER - 1):', resta(Number.MAX_SAFE_INTEGER, 1));

/*
4._ Frontera(Numeros mayores) (ejemplo MAX_SAFE_INTEGER + 5 - 0)
*/
console.log('Frontera (MAX_SAFE_INTEGER *2 - 8):', resta(Number.MAX_SAFE_INTEGER*2 , 8));

/*
5._ Fuera de frontera (números mayores)
*/
console.log('Fuera de frontera (MAX_SAFE_INTEGER + 1000000 - 500000):', resta(Number.MAX_SAFE_INTEGER + 1000000, 500000));

/*
6._ Invalido no definido UNDEFINED
*/
console.log('Undefined (undefined - undefined):', resta(undefined, undefined));

/*
7._ Invalido sin argumentos
*/
console.log('Sin argumentos:', resta());

/*
8._ Por tipo nulo
*/
console.log('Tipo nulo (null - 8):', resta(null, 8));

/*
9._ Por tipo cadena
*/
console.log("Tipo cadena ('2' - '1.5'):", resta('2', '1.5'));

/*
10._ Por negativo (0 - 5)
*/
console.log('Negativo (0 - 5):', resta(0, 5));

/*
11._ Por negativo ambos (-3 - (-7))
*/
console.log('Negativo ambos (-3 - (-7)):', resta(-3, -7));

module.exports = resta;

