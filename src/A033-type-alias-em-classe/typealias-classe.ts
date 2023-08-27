type TipoPessoa = {
  nome: string;
  sobrenome: string;
  nomeCompleto: () => string;
};

export class Pessoa implements TipoPessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
  ) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Igor', 'Nascimento');
console.log(pessoa.nomeCompleto());
