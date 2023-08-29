/* eslint-disable @typescript-eslint/no-unused-vars */
const objeto1: Record<string, string | number> = {
  nome: 'Igor',
  sobrenome: 'Nascimento',
  idade: 19,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;
// Partial
type PessoaPartial = Partial<PessoaRequired>;
// Readonly
type PessoaReadonly = Readonly<PessoaPartial>;
// Pick
type PessoaPick = Pick<PessoaProtocol, 'nome' | 'sobrenome'>;

const objeto2: PessoaReadonly = {
  nome: 'Igor',
  sobrenome: 'Nascimento',
  idade: 19,
};

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TipoExclude = Exclude<ABC, CDE>;
type TipoExtract = Extract<ABC, CDE>;

type AccountMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'asf0isd0-vids0-v',
  nome: 'igor',
  idade: 19,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

//Module mode
export default 1;
