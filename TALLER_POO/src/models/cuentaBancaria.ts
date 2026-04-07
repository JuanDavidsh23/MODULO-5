export class cuentaBancaria{
    private saldo: number

    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
    }

    public consultarSaldo (): number{
        return this.saldo
    }
    
    public depositar (monto: number): void{
        if(monto <= 0){
            throw new Error("El monto deber ser mayor que 0")
        }
        this.saldo += monto;
    }

    public retirar (monto: number): void{
        if(monto > this.saldo){
            throw new Error("No puede retirar una cantidad mayor a la que tiene en su cuenta.")
        }
        this.saldo -= monto
    }

}