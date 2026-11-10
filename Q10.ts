const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 10 ===");

function unir(a: string, b: string): string;
function unir(a: number, b: number): number;
function unir(a: string | number, b: string | number): string | number {
  if (typeof a === "string" && typeof b === "string") return a + b;
  return (a as number) + (b as number);
}

console.log(unir("Olá, ", "mundo"));
console.log(unir(10, 5));

export {};