type meuTipo = number;

const arrayNumeros: Array<meuTipo> = [1, 2, 3, 4, 5];
console.log(arrayNumeros);

async function promiseAsync() {
  return 1;
}

function minhaPromise(): Promise<meuTipo> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((resultado) => console.log(resultado + 1));
minhaPromise().then((resultado) => console.log(resultado + 1));
