class CuentaBancaria {
    private saldo: number;
    private titular: string;
  
    constructor(titular: string, saldoInicial: number = 0) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(cantidad: number): void {
      this.saldo += cantidad;
      console.log(`Se depositaron ${cantidad} en la cuenta de ${this.titular}. Saldo actual: ${this.saldo}`);
    }
  
    retirar(cantidad: number): void {
      if (cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se retiraron ${cantidad} de la cuenta de ${this.titular}. Saldo actual: ${this.saldo}`);
      } else {
        console.log(`Saldo insuficiente para realizar la operación.`);
      }
    }
  
    consultarSaldo(): number {
      return this.saldo;
    }
  
    getTitular(): string {
      return this.titular;
    }
  }
  
  // Ej:
  const miCuenta = new CuentaBancaria('Juan Pérez', 1000);
  
  miCuenta.depositar(500);
  miCuenta.retirar(200);
  miCuenta.retirar(1500);
  
  console.log(`Saldo actual de la cuenta de ${miCuenta.getTitular()}: ${miCuenta.consultarSaldo()}`);
  