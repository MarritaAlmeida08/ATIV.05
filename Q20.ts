const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 20 ===");

class RequisicaoHttp {
  enviar(dados: string): string {
    const resposta = `[HTTP] Enviando: ${dados}`;
    console.log(resposta);
    return resposta;
  }
}

class RequisicaoSegura extends RequisicaoHttp {
  override enviar(dados: string): string {
    const sanitizado = dados.replace(/[<>]/g, "");
    const embaralhado = sanitizado.split("").reverse().join("");
    return super.enviar(`(HTTPS/embaralhado) ${embaralhado}`);
  }
}

new RequisicaoHttp().enviar("olá");
new RequisicaoSegura().enviar("<b>olá</b>");

export {};