export class Empresa {
  private readonly nome: string;
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cpnj: string;

  constructor(nome: string, cpnj: string) {
    this.nome = nome;
    this.cpnj = cpnj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }

  getNome(): string {
    return this.nome;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '123');
const colaborador1 = new Colaborador('Igor', 'Nascimento');
const colaborador2 = new Colaborador('Maria', 'Maria');
const colaborador3 = new Colaborador('Jose', 'Jose');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1.getNome());
