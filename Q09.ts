const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 9 ===");

class Repositorio {
  private dados: string[] = ["Maçã", "Banana", "Abacaxi", "Laranja", "Manga"];

  buscar(id: number): string;
  buscar(termo: string): string[];
  buscar(param: number | string): string | string[] {
    if (typeof param === "number") {
      const item = this.dados[param];
      return item ? `Item #${param}: ${item}` : `Item #${param} não encontrado`;
    }
    return this.dados.filter((d) => d.toLowerCase().includes(param.toLowerCase()));
  }
}

const repo = new Repositorio();
console.log(repo.buscar(2));
console.log(repo.buscar("an"));

export {};