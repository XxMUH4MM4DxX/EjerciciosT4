
const {resta} = require('./resta');

describe('mensaje', ()=> {

const resta = require('./resta');

describe('Pruebas para la función resta', () => {
    // 1. Normal
    test('1. Resta normal (2 - 5): debe ser -3', () => {
        expect(resta(2, 5)).toBe(-3);
    });

    // 2. Decimales
    test('2. Resta con decimales (5.5 - 3.2): debe ser 2.3', () => {
        expect(resta(5.5, 3.2)).toBeCloseTo(2.3);
    });

    // 3. Frontera: uso de Number.MAX_SAFE_INTEGER
    test('3. Frontera (MAX_SAFE_INTEGER - 1)', () => {
        expect(resta(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER - 1);
    });

    // 4. Frontera: Número mayor (MAX_SAFE_INTEGER * 2 - 8)
    test('4. Frontera (MAX_SAFE_INTEGER * 2 - 8)', () => {
        expect(resta(Number.MAX_SAFE_INTEGER * 2, 8)).toBe(Number.MAX_SAFE_INTEGER * 2 - 8);
    });

    // 5. Fuera de frontera (MAX_SAFE_INTEGER + 1000000 - 500000)
    test('5. Fuera de frontera (MAX_SAFE_INTEGER + 1000000 - 500000)', () => {
        expect(resta(Number.MAX_SAFE_INTEGER + 1000000, 500000)).toBe((Number.MAX_SAFE_INTEGER + 1000000) - 500000);
    });

    // 6. Invalido: undefined - undefined
    test('6. Undefined - Undefined', () => {
        expect(resta(undefined, undefined)).toBeNaN();
    });

    // 7. Invalido: sin argumentos
    test('7. Sin argumentos', () => {
        expect(resta()).toBeNaN();
    });

    // 8. Tipo nulo (null - 8)
    test('8. Null - 8', () => {
        expect(resta(null, 8)).toBe(-8); // null es 0 en operaciones numéricas
    });

    // 9. Tipo cadena ('2' - '1.5')
    test("9. Cadenas numéricas ('2' - '1.5')", () => {
        expect(resta('2', '1.5')).toBeCloseTo(0.5);
    });

    // 10. Negativo (0 - 5)
    test('10. Negativo (0 - 5)', () => {
        expect(resta(0, 5)).toBe(-5);
    });

    // 11. Negativo ambos (-3 - (-7))
    test('11. Negativo ambos (-3 - (-7))', () => {
        expect(resta(-3, -7)).toBe(4);
    });
});


})

