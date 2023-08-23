type Idade = number;
type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Black';
type corPreferida = CorRGB | CorCMYK;

const pessoa: Pessoa = {
  idade: 30,
  nome: 'Igor',
  salario: 2000.0,
};

export function setCorPreferida(pessoa: Pessoa, cor: corPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

console.log(pessoa);
console.log(setCorPreferida(pessoa, 'Azul'));
