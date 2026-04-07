
export function validarMonto<T extends { monto: number }>(data: T): number {
  if (data.monto <= 0) {
    throw new Error("El monto debe ser mayor a 0");
  }
  return data.monto;
}