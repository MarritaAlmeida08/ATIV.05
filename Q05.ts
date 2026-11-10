const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 5 ===");

class Documento {
  imprimir(): void {
    console.log("Imprimindo documento genérico...");
  }
}

class Relatorio extends Documento {
  override imprimir(): void {
    console.log("Imprimindo RELATÓRIO com gráficos e tabelas.");
  }
}

class Certificado extends Documento {
  override imprimir(): void {
    console.log("Imprimindo CERTIFICADO de conclusão.");
  }
}

[new Documento(), new Relatorio(), new Certificado()].forEach((d) => d.imprimir());

export {};