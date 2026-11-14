import { useNavigate } from 'react-router-dom';
import {
  FaUser,
  FaHospital,
  FaCalendarCheck,
  FaCheckCircle,
  FaShieldAlt,
  FaBolt,
  FaMobileAlt,
  FaStar,
  FaSearch,
  FaBell,
  FaCreditCard,
  FaArrowRight,
  FaStethoscope,
  FaHeartbeat,
  FaClock,
  FaUserMd,
  FaQuoteLeft,
  FaLock,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaMagic,
  FaHeart,
} from 'react-icons/fa';
import './landing.css';

const specialties = [
  'Cardiologia',
  'Dermatologia',
  'Pediatria',
  'Ortopedia',
  'Neurologia',
  'Clínica Geral',
  'Psiquiatria',
  'Ginecologia',
  'Oftalmologia',
  'Nutrição',
];

const features = [
  {
    icon: <FaCalendarCheck />,
    title: 'Agende online',
    text: 'Escolha data e horário que melhor se adequam à sua rotina. Sem ligações, sem espera.',
  },
  {
    icon: <FaSearch />,
    title: 'Encontre especialistas',
    text: 'Busque por especialidade, localização ou plano de saúde. Centenas de médicos disponíveis.',
  },
  {
    icon: <FaMobileAlt />,
    title: 'Gerencie tudo',
    text: 'Acompanhe consultas, exames e histórico médico em um único painel elegante.',
  },
  {
    icon: <FaBell />,
    title: 'Lembretes inteligentes',
    text: 'Receba notificações automáticas e nunca mais esqueça um compromisso importante.',
  },
  {
    icon: <FaCreditCard />,
    title: 'Pagamento seguro',
    text: 'Pague online com cartão, pix ou plano de saúde em um ambiente totalmente protegido.',
  },
  {
    icon: <FaStar />,
    title: 'Avaliações reais',
    text: 'Veja opiniões de outros pacientes antes de escolher o profissional ideal para você.',
  },
];

const steps = [
  {
    number: '01',
    icon: <FaUser />,
    title: 'Crie sua conta',
    text: 'Cadastre-se em menos de um minuto e tenha acesso a toda a plataforma.',
  },
  {
    number: '02',
    icon: <FaSearch />,
    title: 'Escolha o especialista',
    text: 'Filtre por especialidade, avaliação e disponibilidade para encontrar o médico certo.',
  },
  {
    number: '03',
    icon: <FaCalendarCheck />,
    title: 'Confirme e pronto',
    text: 'Escolha o horário, confirme e receba todos os lembretes automaticamente.',
  },
];

const testimonials = [
  {
    quote:
      'Consegui agendar minha consulta em menos de dois minutos. A interface é linda e muito fácil de usar.',
    name: 'Marina Costa',
    role: 'Paciente • São Paulo',
    initial: 'M',
  },
  {
    quote:
      'Nossa clínica reduziu as faltas em 40% com os lembretes automáticos. O painel é simplesmente incrível.',
    name: 'Dr. Rafael Lima',
    role: 'Clínica Vida+ • Barueri',
    initial: 'R',
  },
  {
    quote:
      'Ter todo o histórico e os agendamentos em um só lugar mudou completamente a forma como cuido da saúde.',
    name: 'Júlia Andrade',
    role: 'Paciente • Osasco',
    initial: 'J',
  },
];

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      {/* Navbar */}
      <nav className="landing-navbar">
        <div className="landing-navbar-content">
          <button className="landing-logo" onClick={() => navigate('/')}>
            <span className="logo-mark">
              <img src="/LOGO-MEDCENTRAL-SemFundo.png" alt="MedCentral" />
            </span>
            <span className="logo-text">MedCentral</span>
          </button>

          <div className="landing-nav-links">
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#depoimentos">Depoimentos</a>
          </div>

          <button className="btn-login" onClick={() => navigate('/login')}>
            Entrar
            <FaArrowRight />
          </button>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="hero" id="top">
          <div className="hero-content">
            <span className="hero-badge anim-rise" style={{ animationDelay: '0.05s' }}>
              <span className="badge-dot" />
              Saúde digital, sem complicação
            </span>

            <h1 className="hero-title anim-rise" style={{ animationDelay: '0.12s' }}>
              Agende sua consulta
              <span className="text-gradient">de forma simples</span>
            </h1>

            <p className="hero-subtitle anim-rise" style={{ animationDelay: '0.2s' }}>
              Encontre médicos, agende consultas e gerencie toda a sua saúde em um só
              lugar. Rápido, fácil e seguro.
            </p>

            <div className="hero-buttons anim-rise" style={{ animationDelay: '0.28s' }}>
              <button className="btn-primary-large" onClick={() => navigate('/login')}>
                <FaUser />
                Sou Paciente
              </button>
              <button className="btn-secondary-large" onClick={() => navigate('/login')}>
                <FaHospital />
                Sou Clínica
              </button>
            </div>

            <div
              className="hero-stats glass-panel anim-rise"
              style={{ animationDelay: '0.36s' }}
            >
              <div className="stat">
                <strong>1000+</strong>
                <span>Médicos cadastrados</span>
              </div>
              <span className="stat-divider" />
              <div className="stat">
                <strong>500+</strong>
                <span>Clínicas parceiras</span>
              </div>
              <span className="stat-divider" />
              <div className="stat">
                <strong>5000+</strong>
                <span>Consultas agendadas</span>
              </div>
            </div>
          </div>

          {/* Hero visual */}
          <div className="hero-stage">
            <span className="hero-stage-glow" />

            <div
              className="hero-main-card glass-strong glass-sheen anim-rise"
              style={{ animationDelay: '0.24s' }}
            >
              <div className="hero-card-top">
                <span className="hero-card-label">
                  <FaCalendarCheck />
                  Próxima consulta
                </span>
                <span className="status-chip">
                  <span className="status-dot" />
                  Confirmada
                </span>
              </div>

              <div className="doctor-row">
                <span className="doctor-avatar">
                  <FaUserMd />
                </span>
                <div>
                  <h3>Dr. João Silva</h3>
                  <p>Cardiologista • CRM 12345</p>
                </div>
              </div>

              <div className="appointment-meta">
                <span>
                  <FaClock /> Hoje, 14:00
                </span>
                <span>
                  <FaHeartbeat /> Presencial
                </span>
              </div>

              <div className="progress-track">
                <span />
              </div>
              <p className="hero-card-note">Tudo pronto para sua consulta <FaMagic className="note-icon" /></p>
            </div>

            <div className="hero-float-card float-card-1 glass-panel">
              <span className="float-icon">
                <FaCheckCircle />
              </span>
              <div>
                <strong>Confirmado</strong>
                <span>Dra. Maria Santos</span>
              </div>
            </div>

            <div className="hero-float-card float-card-2 glass-panel">
              <span className="float-icon">
                <FaBell />
              </span>
              <div>
                <strong>Lembrete</strong>
                <span>Exame • Sex, 08:00</span>
              </div>
            </div>

            <div className="hero-float-card float-card-3 glass-panel">
              <span className="float-icon">
                <FaShieldAlt />
              </span>
              <div>
                <strong>Dados seguros</strong>
                <span>LGPD • Criptografia</span>
              </div>
            </div>

            <span className="hero-chip chip-a">
              <FaStar /> 4.9 avaliação
            </span>
            <span className="hero-chip chip-b">
              <FaBolt /> +500 clínicas
            </span>
          </div>
        </section>

        {/* Trust strip */}
        <section className="trust-strip" aria-label="Especialidades disponíveis">
          <div className="trust-track">
            {[...specialties, ...specialties].map((specialty, index) => (
              <span className="trust-item" key={`${specialty}-${index}`}>
                <FaStethoscope />
                {specialty}
              </span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="features" id="recursos">
          <div className="section-heading">
            <span className="eyebrow">Por que MedCentral</span>
            <h2>
              Saúde organizada,
              <span className="text-gradient"> do seu jeito</span>
            </h2>
            <p>
              Uma experiência completa para pacientes e clínicas, com tudo o que você
              precisa em um painel bonito, rápido e seguro.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                className="feature-card glass-panel anim-rise"
                style={{ animationDelay: `${0.06 * index}s` }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="steps" id="como-funciona">
          <div className="section-heading">
            <span className="eyebrow">Como funciona</span>
            <h2>
              Três passos para
              <span className="text-gradient"> cuidar de você</span>
            </h2>
            <p>Do primeiro acesso à confirmação da consulta, tudo acontece em poucos cliques.</p>
          </div>

          <div className="steps-grid">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="step-card glass-panel anim-rise"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="step-number">{step.number}</span>
                <span className="step-icon">{step.icon}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials" id="depoimentos">
          <div className="section-heading">
            <span className="eyebrow">Depoimentos</span>
            <h2>
              Quem usa,
              <span className="text-gradient"> recomenda</span>
            </h2>
            <p>Milhares de pacientes e clínicas já vivem uma rotina de saúde mais leve.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                className="testimonial-card glass-panel anim-rise"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="quote-icon">
                  <FaQuoteLeft />
                </span>
                <div className="testimonial-stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <FaStar key={starIndex} />
                  ))}
                </div>
                <p>{item.quote}</p>
                <div className="testimonial-author">
                  <span className="author-avatar">{item.initial}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta glass-strong">
            <span className="cta-glow cta-glow-1" />
            <span className="cta-glow cta-glow-2" />
            <span className="cta-badge">
              <FaLock /> 100% seguro
            </span>
            <h2>Pronto para começar?</h2>
            <p>
              Junte-se a milhares de pessoas que já cuidam da saúde com o MedCentral.
            </p>
            <button className="btn-cta" onClick={() => navigate('/login')}>
              Criar Conta Grátis
              <FaArrowRight />
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="footer-content">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <span className="logo-mark">
                <img src="/LOGO-MEDCENTRAL-SemFundo.png" alt="MedCentral" />
              </span>
              <span>MedCentral</span>
            </div>
            <p>Sua saúde em primeiro lugar, sempre.</p>
            <div className="footer-social">
              <a href="https://github.com/v1tzzzz/medcentral-front" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="mailto:contato@medcentral.com.br" aria-label="Email">
                <FaEnvelope />
              </a>
              <a href="tel:+5511999999999" aria-label="Telefone">
                <FaPhone />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Pacientes</h4>
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/login">Cadastro</a></li>
              <li><a href="/">Início</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Clínicas</h4>
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/login">Cadastro</a></li>
              <li><a href="/">Planos</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Empresa</h4>
            <ul>
              <li><a href="/">Sobre</a></li>
              <li><a href="/">Contato</a></li>
              <li><a href="https://github.com/v1tzzzz/medcentral-front" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul className="footer-contact">
              <li><FaMapMarkerAlt /> Barueri, SP</li>
              <li><FaPhone /> (11) 99999-9999</li>
              <li><FaEnvelope /> contato@medcentral.com.br</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 MedCentral. Todos os direitos reservados.</p>
          <span>Feito com <FaHeart className="footer-heart" /> para cuidar de você</span>
        </div>
      </footer>
    </div>
  );
}

export default Landing;
