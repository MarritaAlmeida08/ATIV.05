const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 2 ===");

class Veiculo {
  velocidade = 0;

  acelerar(incremento: number): void {
    this.velocidade += incremento;
  }
}

class CarroEsportivo extends Veiculo {
  override acelerar(incremento: number): void {
    super.acelerar(incremento * 2);
  }
}

const carro = new CarroEsportivo();
carro.acelerar(30);
console.log(`Velocidade: ${carro.velocidade} km/h`);

export {};