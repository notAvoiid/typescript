/* eslint-disable */

let personName: string = 'Igor';
let age: number = 19;
let adult: boolean = true;
let symbol: symbol = Symbol('qualquer-coisa');

//Arrays
let arrayNumber: Array<number> = [1, 2, 3];
let arrayNumber2: number[] = [4,5,6];
let arrayStrings: Array<string> = ['a', 'b'];
let arrayStrings2: string[] = ['c', 'd'];

//Objetos
let pessoa: {name: string, age: number, adult?: boolean} = {
  name: 'Igor',
  age: 19,
  adult: true
};

//Funcoes
function soma(x: number, y:number) {
  return x + y;
}

const soma2: (x: number, y:number) => number = (x, y) => x + y;
