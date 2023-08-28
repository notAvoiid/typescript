type FilterCallBack<T> = (value: T, index?: number, array?: T[]) => boolean;

export function meuFiltro<T>(array: T[], callbackFn: FilterCallBack<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltradoCriado = meuFiltro(array, (value) => value < 5);
console.log(arrayFiltradoCriado);
