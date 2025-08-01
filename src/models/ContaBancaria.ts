// src/models/ContaBancaria.ts
export class ContaBancaria {
  #saldo: number;

  constructor() {
    this.#saldo = 0;
  }

  depositar(valor: number) {
    if (valor > 0) {
      this.#saldo += valor;
    }
    else{
      throw new Error('O valor do depósito deve ser maior que zero.');
    }
  }

  sacar(valor: number) {
    if (valor <= this.#saldo) {
      this.#saldo -= valor;
    }
    else{
      throw new Error('O valor do saque deve ser maior que zero.');
    }
  }

  verSaldo(): number {
    return this.#saldo;
  }
}