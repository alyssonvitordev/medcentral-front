import { useNavigate } from 'react-router-dom';
import {
  FaArrowLeft,
  FaEnvelope,
  FaPhone,
  FaIdCard,
  FaBirthdayCake,
  FaCheckCircle,
} from 'react-icons/fa';
import Navbar from '../../../../components/navbar/navbar';
import './profile.css';

interface ProfileProps {
  nomeUsuario: string;
  onLogout: () => void;
}

function Profile({ nomeUsuario, onLogout }: ProfileProps) {
  const navigate = useNavigate();

  const infoItems = [
    { label: 'Email', value: 'usuario@medcentral.com', icon: <FaEnvelope /> },
    { label: 'Telefone', value: '(11) 99999-9999', icon: <FaPhone /> },
    { label: 'CPF', value: '000.000.000-00', icon: <FaIdCard /> },
    { label: 'Data de Nascimento', value: '01/01/1990', icon: <FaBirthdayCake /> },
  ];

  return (
    <div className="profile-container">
      <Navbar nomeUsuario={nomeUsuario} onLogout={onLogout} />

      <main className="profile-main">
        <div className="profile-content">
          <button onClick={() => navigate('/app/patient/dashboard')} className="btn-voltar">
            <FaArrowLeft />
            Voltar ao Dashboard
          </button>

          <div className="profile-card glass-panel anim-rise">
            <div className="profile-avatar">
              <span>{nomeUsuario.charAt(0).toUpperCase()}</span>
            </div>

            <span className="profile-badge">
              <FaCheckCircle /> Paciente verificado
            </span>

            <h2>{nomeUsuario}</h2>
            <p className="profile-subtitle">Gerencie suas informações pessoais e de contato.</p>

            <div className="profile-info">
              {infoItems.map((item, index) => (
                <div
                  className="info-item anim-fade"
                  key={item.label}
                  style={{ animationDelay: `${0.08 + index * 0.06}s` }}
                >
                  <span className="info-icon">{item.icon}</span>
                  <span className="info-label">{item.label}</span>
                  <span className="info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile;
