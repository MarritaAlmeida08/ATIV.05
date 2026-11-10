const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 4 ===");

class ContaBancaria {
  constructor(protected saldo: number) {}

  sacar(valor: number): boolean {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      return true;
    }
    return false;
  }

  getSaldo(): number {
    return this.saldo;
  }
}

class ContaCorrente extends ContaBancaria {
  private static readonly TAXA = 2.5;

  override sacar(valor: number): boolean {
    return super.sacar(valor + ContaCorrente.TAXA);
  }
}

const cc = new ContaCorrente(100);
console.log("Saque de 50:", cc.sacar(50), "| saldo:", cc.getSaldo());
console.log("Saque de 60:", cc.sacar(60), "| saldo:", cc.getSaldo());

export {};