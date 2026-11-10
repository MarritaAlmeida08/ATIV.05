const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 17 ===");

class CalculadoraFluente {
  protected valor: number;

  constructor(inicial: number = 0) {
    this.valor = inicial;
  }

  somar(n: number): this {
    this.valor += n;
    return this;
  }

  subtrair(n: number): this {
    this.valor -= n;
    return this;
  }

  multiplicar(n: number): this {
    this.valor *= n;
    return this;
  }

  dividir(n: number): this {
    if (n === 0) throw new Error("Divisão por zero");
    this.valor /= n;
    return this;
  }

  resultado(): number {
    return this.valor;
  }
}

class CalculadoraCientifica extends CalculadoraFluente {
  potencia(expoente: number): this {
    this.valor = this.valor ** expoente;
    return this;
  }

  raizQuadrada(): this {
    this.valor = Math.sqrt(this.valor);
    return this;
  }
}

console.log(new CalculadoraCientifica(2).somar(1).potencia(3).subtrair(2).raizQuadrada().resultado());

export {};