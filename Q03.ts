const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 3 ===");

abstract class Animal {
  constructor(protected nome: string) {}
  abstract falar(): string;
}

class Cachorro extends Animal {
  falar(): string {
    return `${this.nome} diz: Au au!`;
  }
}

class Gato extends Animal {
  falar(): string {
    return `${this.nome} diz: Miau!`;
  }
}

const animais: Animal[] = [new Cachorro("Rex"), new Gato("Mimi")];
animais.forEach((a) => console.log(a.falar()));

export {};