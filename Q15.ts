const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 15 ===");

interface Tributavel {
  calculaTributos(): number;
}

class ContaCorrente implements Tributavel {
  constructor(private saldo: number) {}
  calculaTributos(): number {
    return this.saldo * 0.01;
  }
}

class SeguroDeVida implements Tributavel {
  constructor(private valorApolice: number) {}
  calculaTributos(): number {
    return 42 + this.valorApolice * 0.02;
  }
}

class AuditoriaInterna {
  private itens: Tributavel[] = [];

  adicionar(item: Tributavel): void {
    this.itens.push(item);
  }

  totalTributos(): number {
    return this.itens.reduce((total, i) => total + i.calculaTributos(), 0);
  }
}

const auditoria = new AuditoriaInterna();
auditoria.adicionar(new ContaCorrente(10000));
auditoria.adicionar(new SeguroDeVida(20000));
console.log(`Total de tributos: R$ ${auditoria.totalTributos().toFixed(2)}`);

export {};