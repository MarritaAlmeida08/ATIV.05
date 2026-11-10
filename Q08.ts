const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 8 ===");

class Pessoa {
  nome: string;
  idade?: number;

  constructor(nome: string);
  constructor(nome: string, idade: number);
  constructor(nome: string, idade?: number) {
    this.nome = nome;
    this.idade = idade;
  }

  apresentar(): string {
    return this.idade !== undefined
      ? `${this.nome}, ${this.idade} anos`
      : `${this.nome} (idade não informada)`;
  }
}

console.log(new Pessoa("Carlos").apresentar());
console.log(new Pessoa("Maria", 22).apresentar());

export {};