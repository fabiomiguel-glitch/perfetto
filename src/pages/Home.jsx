import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Home.css';

export default function Home({ totalCars, totalCategories }) {
  const navigate = useNavigate();

  const stats = [
    { value: totalCars, label: 'Automóveis em Stock' },
    { value: totalCategories, label: 'Categorias Cobertas' }
  ];

  const highlights = [
    { title: 'Showroom Lisboa', icon: '🏢' },
    { title: 'Fundado em 2005', icon: '📅' },
    { title: 'Lisboa, Portugal', icon: '📍' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="logo-emoji-large">🚗</span>
            <span>Perfetto</span>
          </h1>
          <p className="hero-tagline">A concessionária de confiança desde 2005</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
          <div className="stat-card stat-cta">
            <button className="btn-inventory" onClick={() => navigate('/inventario')}>
              Gerir Inventário
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section">
        <div className="highlights-container">
          {highlights.map((highlight, idx) => (
            <div key={idx} className="highlight-card">
              <div className="highlight-icon">{highlight.icon}</div>
              <h3 className="highlight-title">{highlight.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

Home.propTypes = {
  totalCars: PropTypes.number.isRequired,
  totalCategories: PropTypes.number.isRequired
};
