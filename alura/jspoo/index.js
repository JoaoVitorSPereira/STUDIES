import { Cliente } from './Cliente.js';
import { Gerente } from './Funcionarios/Gerente.js';
import { Diretor } from './Funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const diretor = new Diretor('Joao', 10000, 12345678800);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('AJ', 1000, 12345678900);
gerente.cadastrarSenha('123');

const cliente = new Cliente('Nivea', 12345678900, '456');
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, '123456');
const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456');

console.log(gerenteEstaLogado, diretorEstaLogado);

const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456');
