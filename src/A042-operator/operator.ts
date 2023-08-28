type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'Titulo',
  texto: 'Texto',
  // data: new Date(),
};

console.log(documento);
console.log(documento.data?.toDateString() ?? 'Ixi, nao existe data!');
console.log(undefined ?? 'Ixi, nao existe data!');
console.log(null ?? 'Ixi, nao existe data!');
console.log(false ?? 'Ixi, nao existe data!');
console.log(0 ?? 'Ixi, nao existe data!');
console.log(' ' ?? 'Ixi, nao existe data!');
