import './About.css';

export default function About() {
  const sections = [
    {
      number: '01',
      title: 'A Nossa História',
      content: 'A Perfetto foi fundada em 2005 em Lisboa, Portugal, com a visão de tornar a compra e venda de automóveis uma experiência transparente e satisfatória. Começámos com um pequeno showroom e crescemos significativamente, construindo uma reputação sólida baseada na qualidade e no atendimento excepcional.',
      icon: '📖'
    },
    {
      number: '02',
      title: 'Compromisso com a Qualidade',
      content: 'Cada automóvel que passa pelo nosso showroom é inspecionado rigorosamente por técnicos especializados. Acreditamos que nossos clientes merecem apenas os melhores veículos, com históricos claros e condições impecáveis.',
      icon: '✨'
    },
    {
      number: '03',
      title: 'Valores Fundamentais',
      content: 'Transparência, integridade e satisfação do cliente são os pilares da nossa operação. Oferecemos informações completas sobre cada veículo, preços justos e suporte contínuo pós-venda.',
      icon: '🎯'
    },
    {
      number: '04',
      title: 'O Nosso Futuro',
      content: 'Continuamos a inovar e expandir os nossos serviços, integrando novas tecnologias para melhorar a experiência de compra. O nosso objetivo é permanecer como a concessionária de confiança preferida em Portugal.',
      icon: '🚀'
    }
  ];

  return (
    <div className="about-page">
      <div className="about-header">
        <h1>Sobre a Perfetto</h1>
        <p className="about-intro">Conheça a história e valores da nossa concessionária</p>
      </div>

      <div className="about-content">
        {sections.map((section, idx) => (
          <section key={idx} className={`content-block ${idx % 2 === 0 ? 'left' : 'right'}`}>
            <div className="section-number">{section.number}</div>
            <div className="section-body">
              <div className="section-icon">{section.icon}</div>
              <h2 className="section-title">{section.title}</h2>
              <p className="section-text">{section.content}</p>
            </div>
          </section>
        ))}
      </div>

      <section className="contact-section">
        <h2>Visite-nos</h2>
        <div className="contact-info">
          <div className="contact-item">
            <span className="contact-label">Localização</span>
            <span className="contact-value">Lisboa, Portugal</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Fundação</span>
            <span className="contact-value">2005</span>
          </div>
          <div className="contact-item">
            <span className="contact-label">Especialidade</span>
            <span className="contact-value">Compra e Venda de Automóveis</span>
          </div>
        </div>
      </section>
    </div>
  );
}
