const validarPassword = require('./passwordValidator');

describe('Pruebas para la función validarPassword', () => {
  
  // 1. Contraseña válida robusta
  test('1. Contraseña válida: "Zanga2024@" → true', () => {
    expect(validarPassword("Zanga2024@")).toBe(true);
  });

  // 2. Falta una mayúscula
  test('2. Sin mayúscula: "zanga2024@" → false', () => {
    expect(validarPassword("zanga2024@")).toBe(false);
  });

  // 3. Falta una minúscula
  test('3. Sin minúscula: "ZANGA2024@" → false', () => {
    expect(validarPassword("ZANGA2024@")).toBe(false);
  });

  // 4. Falta un número
  test('4. Sin número: "Zanga@@@@@" → false', () => {
    expect(validarPassword("Zanga@@@@@")).toBe(false);
  });

  // 5. Falta un símbolo
  test('5. Sin símbolo: "Zanga2024" → false', () => {
    expect(validarPassword("Zanga2024")).toBe(false);
  });

  // 6. Menos de 8 caracteres (frontera inferior)
  test('6. Muy corta: "Za2@ng" → false', () => {
    expect(validarPassword("Za2@ng")).toBe(false);
  });

  // 7. Contiene espacio
  test('7. Contiene espacio: "Zanga 2024@" → false', () => {
    expect(validarPassword("Zanga 2024@")).toBe(false);
  });

  // 8. Tipo incorrecto: número → false
  test('8. Tipo inválido (número): 12345678 → false', () => {
    expect(validarPassword(12345678)).toBe(false);
  });

  // 9. Tipo incorrecto: null → false
  test('9. Tipo inválido (null): null → false', () => {
    expect(validarPassword(null)).toBe(false);
  });

  // 10. No contiene la palabra clave "Zanga"
  test('10. Falta palabra clave: "Admin2024@" → false', () => {
    expect(validarPassword("Admin2024@")).toBe(false);
  });

});
