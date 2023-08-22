function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Zé',
  sobrenome: 'da Silva',

  exibir(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Igor', 'Nascimento');
pessoa.exibir();

export { pessoa };
