
import { cuentaBancaria } from "./src/models/cuentaBancaria.js";
import { cajero } from "./src/services/cajeroService.js";
import { validarMonto } from "./src/utils/validaciones.js";

const cuenta = new cuentaBancaria(500);
const cajero1 = new cajero(10000);

try {
  console.log("Saldo inicial:", cuenta.consultarSaldo());

  const deposito = validarMonto({ monto: 400 });
  cajero1.consignarDinero(cuenta, deposito);
  console.log("Saldo después de depositar:", cuenta.consultarSaldo());

  const retiro = validarMonto({ monto: 600 });
  cajero1.retirarDinero(cuenta, retiro);

  console.log("Saldo después de retirar:", cuenta.consultarSaldo());
  console.log("Fondos del cajero:", cajero1.consultarCajero());

} catch (error) {
  if (error instanceof Error) {
    console.error("Error:", error.message);
  }
}