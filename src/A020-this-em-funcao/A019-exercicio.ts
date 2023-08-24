export function funcao(this: Date, argumento1: string, age: number): void {
  console.log(this);
  console.log(argumento1, age);
}
funcao.call(new Date(), 'Igor', 19);
funcao.apply(new Date(), ['Igor', 19]);
