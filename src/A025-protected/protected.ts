export class Empresa {
  private readonly nome: string;
  protected readonly colaboradores: Colaborador[] = [];
  private readonly cpnj: string;

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

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '123');
  }

  popColaborador(): Colaborador | null {
    const colaborador = this.colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
const colaborador1 = new Colaborador('Igor', 'Nascimento');
const colaborador2 = new Colaborador('Maria', 'Maria');
const colaborador3 = new Colaborador('Jose', 'Jose');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
const colaboradorRemovido = empresa1.popColaborador();
console.log(colaboradorRemovido);
console.log(empresa1.getNome());
