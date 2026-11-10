const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 6 ===");

function formatarDado(valor: string): string;
function formatarDado(valor: number, casas?: number): string;
function formatarDado(valor: string | number, casas: number = 2): string {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return valor.toFixed(casas);
}

console.log(formatarDado("typescript"));
console.log(formatarDado(3.14159));
console.log(formatarDado(3.14159, 4));

export {};