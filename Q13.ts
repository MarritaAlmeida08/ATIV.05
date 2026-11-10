const titulo = (t: string) => console.log(`\n=== ${t} ===`);
console.log("\n=== Questão 13 ===");

class AnimalBase {
  constructor(public especie: string) {}
}

class Bovino extends AnimalBase {
  constructor(especie: string, public pesoKg: number) {
    super(especie);
  }
}

class Peixe extends AnimalBase {
  constructor(especie: string, public aguaDoce: boolean) {
    super(especie);
  }
}

function processarAnimal(animal: AnimalBase): void {
  console.log(`Espécie: ${animal.especie}`);
  if (animal instanceof Bovino) console.log(`  Bovino de ${animal.pesoKg} kg`);
  if (animal instanceof Peixe) console.log(`  Peixe de água ${animal.aguaDoce ? "doce" : "salgada"}`);
}

processarAnimal(new Bovino("Nelore", 480));
processarAnimal(new Peixe("Tambaqui", true));

export {};