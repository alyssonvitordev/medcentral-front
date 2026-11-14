import { useNavigate, useLocation } from 'react-router-dom';
import { FaHome, FaBook, FaChartBar, FaUser, FaSignOutAlt } from 'react-icons/fa';
import './navbar.css';

interface NavbarProps {
  nomeUsuario: string;
  onLogout: () => void;
}

function Navbar({ nomeUsuario, onLogout }: NavbarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  // Determina o tipo de usuário baseado na rota
  const getUserType = (): 'patient' | 'clinic' | 'admin' => {
    if (location.pathname.includes('/patient/')) return 'patient';
    if (location.pathname.includes('/clinic/')) return 'clinic';
    if (location.pathname.includes('/admin/')) return 'admin';
    return 'patient';
  };

  const userType = getUserType();

  const goToDashboard = () => {
    if (userType === 'patient') navigate('/app/patient/dashboard');
    if (userType === 'clinic') navigate('/app/clinic/dashboard');
    if (userType === 'admin') navigate('/app/admin/dashboard');
  };

  const initial = (nomeUsuario || 'U').charAt(0).toUpperCase();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {/* Logo clicável */}
        <button className="navbar-brand" onClick={goToDashboard}>
          <img
            src="/LOGO-MEDCENTRAL-SemFundo.png"
            alt="MedCentral Logo"
            className="navbar-logo"
          />
          <h1 className="navbar-title">MedCentral</h1>
        </button>

        {/* Menu de Navegação */}
        <div className="navbar-menu">
          <button
            onClick={goToDashboard}
            className={`nav-link ${
              (userType === 'patient' && location.pathname === '/app/patient/dashboard') ||
              (userType === 'clinic' && location.pathname === '/app/clinic/dashboard') ||
              (userType === 'admin' && location.pathname === '/app/admin/dashboard')
                ? 'active'
                : ''
            }`}
          >
            <FaHome />
            <span>Dashboard</span>
          </button>

          {userType === 'patient' && (
            <button
              onClick={() => navigate('/app/patient/ajuda')}
              className={`nav-link ${
                location.pathname === '/app/patient/ajuda' ? 'active' : ''
              }`}
            >
              <FaBook />
              <span>Base de Conhecimento</span>
            </button>
          )}

          {userType === 'admin' && (
            <button
              onClick={() => navigate('/app/admin/issue-tracking')}
              className={`nav-link ${
                location.pathname === '/app/admin/issue-tracking' ? 'active' : ''
              }`}
            >
              <FaChartBar />
              <span>Rastreamento</span>
            </button>
          )}
        </div>

        {/* User Menu */}
        <div className="navbar-user">
          <div className="user-chip">
            <span className="user-avatar">{initial}</span>
            <span className="user-greeting">Olá, {nomeUsuario}!</span>
          </div>

          {userType === 'patient' && (
            <button
              onClick={() => navigate('/app/patient/perfil')}
              className="btn-perfil"
            >
              <FaUser />
              <span>Perfil</span>
            </button>
          )}

          <button onClick={handleLogout} className="btn-logout">
            <FaSignOutAlt />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
