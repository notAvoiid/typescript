const objectA: {
  chaveA: string;
  chaveB: string;
  readonly chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objectA.chaveA = 'Valor C';
objectA.chaveD = 'Nova chave';

console.log(objectA);
console.log(objectA.chaveA);
console.log(objectA.chaveB);
console.log(objectA.chaveD);
