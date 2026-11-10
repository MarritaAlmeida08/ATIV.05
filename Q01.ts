const titulo = (t: string) => console.log(`\n=== ${t} ===`);
// PARTE 1: Herança básica e sobrescrita (override)
// ---------------------------------------------------------------
 
// Questão 1: Hierarquia de Funcionários
class Funcionario {
  constructor(protected nome: string, protected salarioBase: number) {}
 
  calcularSalario(): number {
    return this.salarioBase;
  }
}
 
class Gerente extends Funcionario {
  constructor(nome: string, salarioBase: number, private bonus: number) {
    super(nome, salarioBase);
  }
 
  override calcularSalario(): number {
    return super.calcularSalario() + this.bonus;
  }
 
  exibir(): string {
    return `${this.nome}: R$ ${this.calcularSalario().toFixed(2)}`;
  }
}
 
titulo("Questão 1");
console.log(new Gerente("Ana", 5000, 1500).exibir());
 
// Questão 2: Veículos e Aceleração
class Veiculo {
  velocidade = 0;
 
  acelerar(incremento: number): void {
    this.velocidade += incremento;
  }
}
 
class CarroEsportivo extends Veiculo {
  override acelerar(incremento: number): void {
    super.acelerar(incremento * 2); // dobro da taxa informada
  }
}
 export {};