/* eslint-disable */

let x = 10;
x = 0b1010;
const y = 10;
let a = 100 as const;

const person = {
  name: 'Igor' as const,
  sobrenome: 'Nascimento',
}

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul') {
  return cor;
}

console.log(escolhaCor('Amarelo'));

//Module mode
export default 1;
