import { cuentaBancaria } from "../models/cuentaBancaria.js";

export class cajero{
    private efectivo: number

    constructor(efectivoInicial: number) {
        this.efectivo = efectivoInicial
    }

    public retirarDinero(cuenta: cuentaBancaria, monto: number): void{
        if(monto > this.efectivo){
            throw new Error ("El cajero no tiene suficiente dinero")
        }
        cuenta.retirar(monto)
        this.efectivo -= monto
    }

    public consignarDinero(cuenta: cuentaBancaria, monto: number): void{
        cuenta.depositar(monto)
        this.efectivo += monto;
    }

    public consultarCajero(): number {
        return this.efectivo
    }

}