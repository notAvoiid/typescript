type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

export const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzirCores(cor: CoresChaves, cores: typeof coresObj) {
  return cores[cor];
}
console.log(traduzirCores('vermelho', coresObj));
console.log(traduzirCores('roxo', coresObj));
console.log(traduzirCores('azul', coresObj));
