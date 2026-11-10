const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 19 ===");

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

const registros: PessoaRegistro[] = [
  new PessoaRegistro("João", "111.111.111-11"),
  new AlunoIFPI("Ana", "222.222.222-22", "2026022", "TADS"),
  new PessoaRegistro("Marcos", "333.333.333-33"),
  new AlunoIFPI("Bia", "444.444.444-44", "2026013", "TADS"),
];

for (const r of registros) {
  if (r instanceof AlunoIFPI) {
    console.log(`${r.nome} -> matrícula ${r.matricula}, curso ${r.curso}`);
  }
}

export {};