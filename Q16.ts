const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 16 ===");

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

console.log(new CalculadoraFluente(10).somar(5).multiplicar(2).subtrair(10).dividir(4).resultado());

export {};