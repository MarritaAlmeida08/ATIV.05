const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 14 ===");

class VendaCarro {
  constructor(protected valor: number) {}

  calculaVenda(): number {
    return this.valor;
  }
}

class Avista extends VendaCarro {
  override calculaVenda(): number {
    return this.valor * 0.9;
  }
}

class Cartao extends VendaCarro {
  override calculaVenda(): number {
    return this.valor * 1.05;
  }
}

class Boleto extends VendaCarro {
  override calculaVenda(): number {
    return this.valor * 0.97;
  }
}

const vendas: VendaCarro[] = [new Avista(50000), new Cartao(50000), new Boleto(50000)];
vendas.forEach((v) => console.log(`${v.constructor.name}: R$ ${v.calculaVenda().toFixed(2)}`));

export {};