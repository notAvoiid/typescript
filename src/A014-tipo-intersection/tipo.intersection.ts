type temNome = { nome: string };
type temSobrenome = { sobrenome: string };
type temIdade = { idade: number };
type Pessoa = temNome & temSobrenome & temIdade;

const pessoa: Pessoa = {
  nome: 'Igor',
  sobrenome: 'Nascimento',
  idade: 19,
};

console.log(pessoa);

//Module mode
export { pessoa };
