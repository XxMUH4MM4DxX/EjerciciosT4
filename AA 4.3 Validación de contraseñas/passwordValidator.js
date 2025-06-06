
function validarPassword(password) {
  const palabraClave = "Zanga";

  if (typeof password !== "string" || !password) return false;
  if (password.length < 8) return false;
  if (/\s/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/[0-9]/.test(password)) return false;
  if (!/[!@#$%&*()]/.test(password)) return false;
  if (!password.includes(palabraClave)) return false;

  return true;
}

module.exports = validarPassword;

