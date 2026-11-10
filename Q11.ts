const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 11 ===");

abstract class FiguraGeometrica {
  abstract calcularArea(): number;
}

class Circulo extends FiguraGeometrica {
  constructor(public raio: number) {
    super();
  }
  calcularArea(): number {
    return Math.PI * this.raio ** 2;
  }
}

class Retangulo extends FiguraGeometrica {
  constructor(public base: number, public altura: number) {
    super();
  }
  calcularArea(): number {
    return this.base * this.altura;
  }
}

const figuras: FiguraGeometrica[] = [
  new Circulo(2),
  new Retangulo(3, 4),
  new Circulo(1.5),
  new Retangulo(5, 2),
];

figuras.forEach((f) => console.log(`${f.constructor.name}: área = ${f.calcularArea().toFixed(2)}`));

export {};