interface Pessoa {
  readonly nome: string;
}

interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: readonly string[];
}

interface Pessoa {
  readonly idade?: number;
}

export const pessoa: Pessoa = {
  nome: 'Igor',
  sobrenome: 'Nascimento',
  endereco: ['AV. Brasil'],
};
console.log(pessoa);
