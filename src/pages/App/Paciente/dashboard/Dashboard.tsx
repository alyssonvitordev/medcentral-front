import { useState } from 'react';
import {
  FaCalendarCheck,
  FaUserMd,
  FaHeartbeat,
  FaTrashAlt,
  FaPlus,
  FaClock,
  FaTimes,
} from 'react-icons/fa';
import Navbar from '../../../../components/navbar/navbar';
import './dashboard.css';

interface DashboardProps {
  nomeUsuario: string;
  onLogout: () => void;
}

interface Agendamento {
  id: number;
  medico: string;
  especialidade: string;
  data: string;
  hora: string;
}

function Dashboard({ nomeUsuario, onLogout }: DashboardProps) {
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([
    {
      id: 1,
      medico: 'Dr. João Silva',
      especialidade: 'Cardiologista',
      data: '25/10/2025',
      hora: '14:00',
    },
    {
      id: 2,
      medico: 'Dra. Maria Santos',
      especialidade: 'Dermatologista',
      data: '28/10/2025',
      hora: '10:30',
    },
  ]);

  const [modalAberto, setModalAberto] = useState(false);
  const [novoAgendamento, setNovoAgendamento] = useState({
    medico: '',
    especialidade: '',
    data: '',
    hora: '',
  });

  const medicos = [
    { nome: 'Dr. João Silva', especialidade: 'Cardiologista' },
    { nome: 'Dra. Maria Santos', especialidade: 'Dermatologista' },
    { nome: 'Dr. Pedro Oliveira', especialidade: 'Ortopedista' },
    { nome: 'Dra. Ana Costa', especialidade: 'Pediatra' },
    { nome: 'Dr. Carlos Mendes', especialidade: 'Neurologista' },
  ];

  const horarios = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30',
    '11:00', '11:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30',
  ];

  const handleNovoAgendamento = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setNovoAgendamento({
      medico: '',
      especialidade: '',
      data: '',
      hora: '',
    });
  };

  const handleMedicoChange = (nomeMedico: string) => {
    const medicoSelecionado = medicos.find((m) => m.nome === nomeMedico);
    setNovoAgendamento({
      ...novoAgendamento,
      medico: nomeMedico,
      especialidade: medicoSelecionado?.especialidade || '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (novoAgendamento.medico && novoAgendamento.data && novoAgendamento.hora) {
      const novoId =
        agendamentos.length > 0 ? Math.max(...agendamentos.map((a) => a.id)) + 1 : 1;

      const agendamento: Agendamento = {
        id: novoId,
        medico: novoAgendamento.medico,
        especialidade: novoAgendamento.especialidade,
        data: formatarData(novoAgendamento.data),
        hora: novoAgendamento.hora,
      };

      setAgendamentos([...agendamentos, agendamento]);
      fecharModal();
    }
  };

  const formatarData = (dataISO: string): string => {
    const [ano, mes, dia] = dataISO.split('-');
    return `${dia}/${mes}/${ano}`;
  };

  const excluirAgendamento = (id: number) => {
    setAgendamentos(agendamentos.filter((a) => a.id !== id));
  };

  const proxima = agendamentos[0];
  const especialidadesUnicas = new Set(agendamentos.map((a) => a.especialidade)).size;

  return (
    <div className="dashboard-container">
      <Navbar nomeUsuario={nomeUsuario} onLogout={onLogout} />

      <main className="dashboard-main">
        <div className="dashboard-content">
          <header className="dashboard-header glass-panel anim-rise">
            <div className="dashboard-heading">
              <span className="eyebrow">Visão geral</span>
              <h2>Meus Agendamentos</h2>
              <p>
                Olá, {nomeUsuario.split(' ')[0] || 'paciente'}! Acompanhe e gerencie suas
                consultas em um só lugar.
              </p>
            </div>

            <div className="dashboard-header-actions">
              <div className="header-stat">
                <strong>{agendamentos.length}</strong>
                <span>consultas ativas</span>
              </div>
              <button onClick={handleNovoAgendamento} className="btn-novo">
                <FaPlus />
                Novo Agendamento
              </button>
            </div>
          </header>

          <div className="dashboard-overview">
            <div className="overview-card glass-panel anim-rise" style={{ animationDelay: '0.08s' }}>
              <span className="overview-icon">
                <FaCalendarCheck />
              </span>
              <div>
                <span className="overview-label">Próxima consulta</span>
                <strong className="overview-value">
                  {proxima ? `${proxima.data} • ${proxima.hora}` : 'Nenhuma agendada'}
                </strong>
              </div>
            </div>

            <div className="overview-card glass-panel anim-rise" style={{ animationDelay: '0.16s' }}>
              <span className="overview-icon">
                <FaHeartbeat />
              </span>
              <div>
                <span className="overview-label">Especialidades</span>
                <strong className="overview-value">
                  {especialidadesUnicas} {especialidadesUnicas === 1 ? 'especialidade' : 'especialidades'}
                </strong>
              </div>
            </div>

            <div className="overview-card glass-panel anim-rise" style={{ animationDelay: '0.24s' }}>
              <span className="overview-icon">
                <FaUserMd />
              </span>
              <div>
                <span className="overview-label">Médicos disponíveis</span>
                <strong className="overview-value">{medicos.length} profissionais</strong>
              </div>
            </div>
          </div>

          {agendamentos.length > 0 ? (
            <div className="agendamentos-grid">
              {agendamentos.map((agendamento, index) => (
                <article
                  key={agendamento.id}
                  className="agendamento-card glass-panel glass-sheen anim-rise"
                  style={{ animationDelay: `${0.1 + index * 0.06}s` }}
                >
                  <div className="agendamento-info">
                    <h3>{agendamento.medico}</h3>
                    <p className="especialidade">{agendamento.especialidade}</p>
                  </div>
                  <div className="agendamento-datetime">
                    <span className="data">
                      <FaCalendarCheck /> {agendamento.data}
                    </span>
                    <span className="hora">
                      <FaClock /> {agendamento.hora}
                    </span>
                  </div>
                  <button
                    className="btn-excluir"
                    onClick={() => excluirAgendamento(agendamento.id)}
                    title="Excluir agendamento"
                    aria-label="Excluir agendamento"
                  >
                    <FaTrashAlt />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state glass-panel">
              <p>Você ainda não possui agendamentos.</p>
              <button onClick={handleNovoAgendamento} className="btn-primary">
                <FaPlus />
                Agendar Consulta
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal de Agendamento */}
      {modalAberto && (
        <div className="modal-overlay" onClick={fecharModal}>
          <div className="modal-content glass-strong" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <span className="eyebrow">Agenda</span>
                <h2>Novo Agendamento</h2>
              </div>
              <button className="btn-close-modal" onClick={fecharModal} aria-label="Fechar">
                <FaTimes />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label htmlFor="medico">Médico *</label>
                <select
                  id="medico"
                  value={novoAgendamento.medico}
                  onChange={(e) => handleMedicoChange(e.target.value)}
                  required
                >
                  <option value="">Selecione um médico</option>
                  {medicos.map((medico) => (
                    <option key={medico.nome} value={medico.nome}>
                      {medico.nome} - {medico.especialidade}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="data">Data *</label>
                <input
                  type="date"
                  id="data"
                  value={novoAgendamento.data}
                  onChange={(e) =>
                    setNovoAgendamento({
                      ...novoAgendamento,
                      data: e.target.value,
                    })
                  }
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="hora">Horário *</label>
                <select
                  id="hora"
                  value={novoAgendamento.hora}
                  onChange={(e) =>
                    setNovoAgendamento({
                      ...novoAgendamento,
                      hora: e.target.value,
                    })
                  }
                  required
                >
                  <option value="">Selecione um horário</option>
                  {horarios.map((horario) => (
                    <option key={horario} value={horario}>
                      {horario}
                    </option>
                  ))}
                </select>
              </div>

              <div className="modal-actions">
                <button type="button" onClick={fecharModal} className="btn-cancelar">
                  Cancelar
                </button>
                <button type="submit" className="btn-confirmar">
                  Agendar Consulta
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
