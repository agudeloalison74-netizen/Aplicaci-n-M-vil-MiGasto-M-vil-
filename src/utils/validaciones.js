// src/utils/validaciones.js
export function validarGasto(categoria, valor) {
  const errores = {};

  // Validar categoría
  if (!categoria || categoria.trim() === '') {
    errores.categoria = 'La categoría es obligatoria';
  }

  // Validar valor
  if (!valor || valor.trim() === '') {
    errores.valor = 'El valor es obligatorio';
  } else if (isNaN(Number(valor))) {
    errores.valor = 'El valor debe ser numérico';
  } else if (Number(valor) <= 0) {
    errores.valor = 'El valor debe ser mayor que cero';
  }

  return errores;
}