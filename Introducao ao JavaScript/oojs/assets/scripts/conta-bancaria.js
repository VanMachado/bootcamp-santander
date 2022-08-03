//Classe Pai
class ContaBancaria {
  
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  }

  get saldo() {
    return this._saldo;
  }

  sacar(valor){
    if(valor < this._saldo){
      return this._saldo -= valor;
    } else {
      return 'Saldo insuficiente';
    }
  }

  depositar(valor) {
    return this._saldo += valor;
  }
}

//Conta Corrente
class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito ) {
    super (agencia, numero);
    this.tipo = 'Conta Corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
      return this._cartaoCredito;
  }

  set cartaoCredito(valor) {
      this._cartaoCredito = valor;
  }
}

//Conta Poupança
class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero, tipo) {
      super (agencia, numero, tipo);                
  }
}

//Conta Universitária
class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero, tipo) {
      super (agencia, numero, tipo);        
  }

  sacar(valor) {
      if(valor < 500 && valor < this._saldo) {
          return console.log(`Esse é o novo saldo: R$ ${this._saldo -= valor}`);
      } else {
          return console.log('Operação não permitida');
      }
  }
}

// const cn = new contaUniversitaria(12, 34, 'Conta Universitaria', 1000);

// cn.sacar(400);