const dadosCliente1: readonly [number, string] = [1, 'Igor'];
const dadosCliente2: [number, string, string] = [1, 'Igor', 'Nascimento'];
const dadosCliente3: [number, string, string?] = [1, 'Igor', 'Nascimento'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Igor', 'Nascimento'];

// dadosCliente1[0] = 2;
// dadosCliente1[1] = 'Nascimento';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

const array1: readonly string[] = ['Igor', 'Nascimento'];
const array2: ReadonlyArray<string> = ['Igor', 'Nascimento'];

console.log(array1);
console.log(array2);
