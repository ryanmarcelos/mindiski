console.log("=== ENCAPSULAMENTO===");
class ContaBancaria{
    #saldo = 0;
    constructor(titular){
        this.titular = titular;
    }
    depositar(valor){
        if(valor > 0){
            this.#saldo += valor;
            console.log(`Deposito de R$${valor} realizado.`);

        }else{
            console.log("valor inválido para depósito");
        }
    }
    sacar(valor){
        if(valor >0 && valor <= this.#saldo){
            this.#saldo -= valor;
            console.log(`Saque de R$${valor} realizado`);
        }

    else{console.log("Saldo insuficiente ou valor inválido");}
    }
    consultarSaldo(){return this.#saldo}
}
const minhaconta = new ContaBancaria("João");
minhaconta.depositar(100)
minhaconta.sacar(30)
console.log(`Saldo: R$${minhaconta.consultarSaldo()}`);

//console.log(minhaconta.#saldo);