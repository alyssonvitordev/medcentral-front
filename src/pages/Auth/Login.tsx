import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaHospital,
  FaBolt,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
  FaExclamationTriangle,
  FaLock,
  FaCheckCircle,
} from 'react-icons/fa';
import './login.css';

interface LoginProps {
  onLogin: (nome: string, tipo: 'patient' | 'clinic' | 'admin') => void;
}

// Credenciais fake para teste
const CREDENCIAIS_FAKE = {
  patient: {
    email: 'paciente@medcentral.com',
    senha: 'paciente123',
    nome: 'João Silva',
  },
  clinic: {
    email: 'clinica@medcentral.com',
    senha: 'clinica123',
    nome: 'Clínica São Paulo',
  },
  admin: {
    email: 'admin@medcentral.com',
    senha: 'admin123',
    nome: 'Administrador',
  },
};

const TIPOS = [
  { id: 'patient' as const, label: 'Paciente', icon: <FaUser /> },
  { id: 'clinic' as const, label: 'Clínica', icon: <FaHospital /> },
  { id: 'admin' as const, label: 'Admin', icon: <FaBolt /> },
];

function Login({ onLogin }: LoginProps) {
  const navigate = useNavigate();
  const [tipoUsuario, setTipoUsuario] = useState<'patient' | 'clinic' | 'admin'>('patient');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [erro, setErro] = useState<string>('');
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErro('');

    const credencial = CREDENCIAIS_FAKE[tipoUsuario];

    if (email === credencial.email && senha === credencial.senha) {
      onLogin(credencial.nome, tipoUsuario);
    } else {
      setErro('Email ou senha incorretos. Tente novamente.');
    }
  };

  const handleVoltar = () => {
    navigate('/');
  };

  const preencherCredenciais = () => {
    const credencial = CREDENCIAIS_FAKE[tipoUsuario];
    setEmail(credencial.email);
    setSenha(credencial.senha);
  };

  const tipoLabel =
    tipoUsuario === 'patient' ? 'Paciente' : tipoUsuario === 'clinic' ? 'Clínica' : 'Admin';

  return (
    <div className="login-container">
      <button onClick={handleVoltar} className="btn-voltar-landing">
        <FaArrowLeft />
        Voltar para Início
      </button>

      <div className="login-card glass-strong anim-rise">
        <div className="login-header">
          <span className="login-logo">
            <img src="/LOGO-MEDCENTRAL-SemFundo.png" alt="MedCentral" />
          </span>
          <span className="login-eyebrow">
            <FaLock /> Ambiente seguro
          </span>
          <h1>MedCentral</h1>
          <p>Sistema de Agendamento Médico</p>
        </div>

        {/* Seleção de Tipo de Usuário */}
        <div className="user-type-selector">
          {TIPOS.map((tipo) => (
            <button
              key={tipo.id}
              type="button"
              className={`type-btn ${tipoUsuario === tipo.id ? 'active' : ''}`}
              onClick={() => {
                setTipoUsuario(tipo.id);
                setErro('');
                setEmail('');
                setSenha('');
              }}
            >
              <span className="type-icon">{tipo.icon}</span>
              <span>{tipo.label}</span>
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="login-form">
          {erro && (
            <div className="erro-mensagem">
              <FaExclamationTriangle className="erro-icon" />
              <span>{erro}</span>
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <div className="senha-input-wrapper">
              <input
                type={mostrarSenha ? 'text' : 'password'}
                id="senha"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                autoComplete="current-password"
                required
              />
              <button
                type="button"
                className="btn-mostrar-senha"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
              >
                {mostrarSenha ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="btn-primary">
            Entrar como {tipoLabel}
          </button>
        </form>

        <div className="login-footer">
          <p className="demo-info">
            <FaCheckCircle /> Versão de demonstração
          </p>
          <button type="button" className="btn-demo" onClick={preencherCredenciais}>
            Preencher credenciais de teste
          </button>
          <div className="credentials-info">
            <p>
              <strong>{tipoLabel}:</strong>
            </p>
            <p>Email: {CREDENCIAIS_FAKE[tipoUsuario].email}</p>
            <p>Senha: {CREDENCIAIS_FAKE[tipoUsuario].senha}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
