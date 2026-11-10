const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 18 ===");

class PessoaRegistro {
  constructor(public nome: string, protected cpf: string) {}

  exibirDados(): string {
    return `Nome: ${this.nome} | CPF: ${this.cpf}`;
  }
}

class AlunoIFPI extends PessoaRegistro {
  constructor(nome: string, cpf: string, public matricula: string, public curso: string) {
    super(nome, cpf);
  }

  override exibirDados(): string {
    return `${super.exibirDados()} | Matrícula: ${this.matricula} | Curso: ${this.curso}`;
  }
}

console.log(new AlunoIFPI("Maria", "079.995.683-09", "2026114TADS0016", "TADS").exibirDados());

export {};