interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

const aluno1: PessoaProtocolo<string, number> = {
  nome: 'Igor',
  sobrenome: 'Nascimento',
  idade: 19,
};

const aluno2: PessoaProtocolo<number, number> = {
  nome: 19,
  sobrenome: 19,
  idade: 19,
};

const aluno3: PessoaProtocolo = {
  nome: 'Igor',
  sobrenome: 'Nascimento',
  idade: 19,
};

console.log(aluno1, aluno2, aluno3);
