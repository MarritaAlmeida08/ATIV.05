const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 7 ===");

class CalculadoraSimples {
  somar(a: number, b: number): number;
  somar(a: number, b: number, c: number): number;
  somar(numeros: number[]): number;
  somar(a: number | number[], b?: number, c?: number): number {
    if (Array.isArray(a)) {
      return a.reduce((acc, n) => acc + n, 0);
    }
    return a + (b ?? 0) + (c ?? 0);
  }
}

const calc = new CalculadoraSimples();
console.log(calc.somar(1, 2));
console.log(calc.somar(1, 2, 3));
console.log(calc.somar([1, 2, 3, 4, 5]));

export {};