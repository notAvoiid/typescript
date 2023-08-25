export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {}

  set cpf(cpf: string) {
    this._cpf = cpf;
  }

  get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }

  getNomeCompleto(): string {
    return 'Isso vem da pessoa: ' + this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Igor', 'Nascimento', 19, '501');
console.log(pessoa);
