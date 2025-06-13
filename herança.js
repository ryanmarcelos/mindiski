console.log("=== EXERCÍCIO 2: HIERARQUIA DE FUNCIONÁRIOS ===");
console.log("Conceito: HERANÇA\n");

// Classe pai
class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase;
    }

    apresentar() {
        console.log(`${this.nome} - Funcionário!`);
    }
}

// Classe filha - Vendedor
class Vendedor extends Funcionario {
    constructor(nome, salarioBase, vendas) {
        super(nome, salarioBase); 
        this.vendas = vendas;
    }

    // Sobrescrevo o método da classe pai
    calcularSalario() {
        return this.salarioBase + (this.vendas * 50);
    }

    apresentar() {
        console.log(`${this.nome} - Vendedor com ${this.vendas} vendas este mês!`);
    }
}

// Classe filha - Gerente
class Gerente extends Funcionario {
    constructor(nome, salarioBase, bonus) {
        super(nome, salarioBase);
        this.bonus = bonus;
    }

    // Sobrescrevo o método da classe pai
    calcularSalario() {
        return this.salarioBase + this.bonus;
    }

    apresentar() {
        console.log(`${this.nome} - Gerente com bônus de R$${this.bonus}!`);
    }
}

// Teste do Exercício 2
const funcionario1 = new Funcionario("João", 3000);
const vendedor1 = new Vendedor("Ana", 2000, 10);
const gerente1 = new Gerente("Carlos", 5000, 1500);

console.log("=== Apresentações ===");
funcionario1.apresentar(); 
vendedor1.apresentar(); 
gerente1.apresentar(); 

console.log("\n=== Salários ===");
console.log(`${funcionario1.nome}: R$${funcionario1.calcularSalario()}`); 
console.log(`${vendedor1.nome}: R$${vendedor1.calcularSalario()}`); 
console.log(`${gerente1.nome}: R$${gerente1.calcularSalario()}`);