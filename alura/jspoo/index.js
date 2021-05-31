import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Rodrigo', 10000, 12345678800);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Carlos', 1000, 12345678900);

const estaLogado = SistemaAutenticacao.login(diretor, '123456');

console.log(estaLogado);
