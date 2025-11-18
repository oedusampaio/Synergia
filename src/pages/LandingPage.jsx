import "../landingpage.css";

export default function LandingPage() {
  return (
    <>
      {/* HEADER FIXO */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span>SYNERGIA</span>
          </div>
          <nav className="nav-menu">
            <a href="#about">Sobre Nós</a>
            <a href="#home">Início</a>
            <a href="#how-it-works">Como funciona</a>
            <a href="#contact">Contato</a>
            <a href="#projects">Projetos</a>
          </nav>
          <div className="nav-actions">
            <a href="/login" className="btn-nav">Login</a>
            <a href="/cadastro" className="btn-nav primary">Cadastrar</a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero-section" id="home">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <div className="hero-text">
            <h1 className="hero-title">
              Como podemos <span className="highlight">mudar o mundo</span>?
            </h1>
            <p className="hero-subtitle">
              Tudo começa com um simples passo. Junte-se a milhares de voluntários 
              transformando comunidades e protegendo nosso planeta.
            </p>
            <div className="hero-buttons">
              <a href="/cadastro" className="btn btn-primary">
                Seja Voluntário
                <span className="btn-icon">→</span>
              </a>
              <a href="/sobre" className="btn btn-secondary">
                Saiba Mais
              </a>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Voluntários</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projetos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">25+</span>
              <span className="stat-label">Comunidades</span>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE A SYNERGIA */}
      <section className="about-section" id="about">
        <div className="container">
          <div className="section-header">
            <h2>A SYNERGIA: Juntos pelo Planeta, Pessoas e Animais</h2>
            <p className="section-subtitle">
              Unindo forças para criar um impacto real e duradouro
            </p>
          </div>
          
          <div className="about-content">
            <div className="about-text">
              <p className="lead">
                A SYNERGIA é uma ONG comprometida em transformar o mundo por meio da união
                de pessoas com um propósito comum: cuidar do nosso planeta, apoiar comunidades
                e proteger os animais e ecossistemas impactados pela poluição.
              </p>
              <div className="mission-highlight">
                <p>✨ Acreditamos que pequenas ações, quando somadas, geram grandes transformações.</p>
              </div>
            </div>
          </div>

          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-image">
                <img 
                  src="/img/1728002025.98.webp" 
                  alt="Crianças sorrindo" 
                  loading="lazy"
                />
              </div>
              <div className="mission-content">
                <h3>Impacto Social</h3>
                <p>Transformamos comunidades através de ações diretas e educação ambiental.</p>
              </div>
            </div>

            <div className="mission-card featured">
              <div className="mission-content">
                <h3>Nossa Missão</h3>
                <p>
                  Na SYNERGIA, unimos pessoas com um propósito: cuidar do planeta,
                  apoiar comunidades e proteger animais.
                </p>
                <p>
                  Trabalhamos na recuperação de áreas poluídas, revitalização de rios,
                  apoio a comunidades e projetos pedagógicos para inspirar mudanças.
                </p>
                <div className="impact-list">
                  <div className="impact-item">
                    <span className="impact-icon">🌱</span>
                    <span>Preservação Ambiental</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-icon">👥</span>
                    <span>Desenvolvimento Comunitário</span>
                  </div>
                  <div className="impact-item">
                    <span className="impact-icon">🐾</span>
                    <span>Proteção Animal</span>
                  </div>
                </div>
              </div>
              <div className="mission-image">
                <img
                  src="/img/Captura de tela 2025-11-11 203644.png"
                  alt="Voluntários limpando"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAIS */}
      <section className="locations-section" id="projects">
        <div className="container">
          <div className="section-header">
            <h2>Locais de Atuação</h2>
            <p className="section-subtitle">
              Conheça nossos principais projetos em andamento
            </p>
          </div>

          <div className="locations-grid">
            <div className="location-card">
              <div className="card-image">
                <img
                  src="/img/10959590_792619874158483_8119899953917673467_n.jpg.73afdd56c775ed0d62944fa6ebe39667.jpg"
                  alt="Voluntário em Cipó-Guaçu"
                  loading="lazy"
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Cipó-Guaçu</h3>
                <p>Projeto de revitalização de áreas verdes e conscientização comunitária</p>
                <a href="/cipo" className="btn-card">
                  Ver Detalhes
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>

            <div className="location-card">
              <div className="card-image">
                <img
                  src="/img/Captura de tela 2025-11-11 204254.png"
                  alt="Voluntário no Guarujá"
                  loading="lazy"
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Guarujá</h3>
                <p>Limpeza de praias e proteção da vida marinha</p>
                <a href="/guaruja" className="btn-card">
                  Ver Detalhes
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>

            <div className="location-card">
              <div className="card-image">
                <img
                  src="/img/Captura de tela 2025-11-11 204408.png"
                  alt="Voluntário no Rio Tietê"
                  loading="lazy"
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Rio Tietê</h3>
                <p>Despoluição e recuperação do maior rio do estado</p>
                <a href="/rio-tiete" className="btn-card">
                  Ver Detalhes
                  <span className="btn-arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO SER VOLUNTÁRIO */}
      <section className="volunteer-section" id="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2>Como ser um Voluntário</h2>
            <p className="section-subtitle">
              4 passos simples para começar a fazer a diferença
            </p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-header">
                <div className="step-number">1</div>
                <h3>Escolha um local próximo</h3>
              </div>
              <p>
                Encontre uma comunidade, bairro ou área que precise de apoio. Quanto
                mais perto, mais fácil participar e acompanhar os resultados.
              </p>
            </div>

            <div className="step-card">
              <div className="step-header">
                <div className="step-number">2</div>
                <h3>Selecione uma ação</h3>
              </div>
              <p>
                Decida como quer contribuir: ajudar na limpeza, revitalização, apoio a
                animais ou projetos educativos. Escolha algo que combine com você.
              </p>
            </div>

            <div className="step-card">
              <div className="step-header">
                <div className="step-number">3</div>
                <h3>Inscreva-se e participe</h3>
              </div>
              <p>
                Cadastre-se em nosso site ou entre em contato com a equipe local. Receba
                todas as instruções e horários para começar a atuar.
              </p>
            </div>

            <div className="step-card">
              <div className="step-header">
                <div className="step-number">4</div>
                <h3>Faça a diferença</h3>
              </div>
              <p>
                Colabore com a comunidade, veja os resultados do seu trabalho e
                compartilhe sua experiência para motivar mais pessoas a se engajar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEEDBACKS */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2>O que dizem nossos Voluntários</h2>
            <p className="section-subtitle">
              Histórias reais de transformação e impacto
            </p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "Sou apaixonada pela causa animal, e o apoio da Synergia aos ecossistemas
                poluídos é vital. É um trabalho sério, que combina o amor pela natureza
                com a responsabilidade de quem age. O impacto é real."
              </p>
              <div className="testimonial-author">
                <img
                  src="/img/Captura de tela 2025-11-11 204724.png"
                  alt="Emanuel Boyle"
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Emanuel Boyle</p>
                  <p className="author-role">Voluntário</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "Participar da Synergia me mostrou o poder da ação local. Ver a comunidade
                unida, limpando o rio e ensinando as crianças sobre sustentabilidade, é
                inspirador. É mais do que limpeza, é esperança."
              </p>
              <div className="testimonial-author">
                <img
                  src="/img/Captura de tela 2025-11-11 204657.png"
                  alt="Ana Beatriz"
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Ana Beatriz</p>
                  <p className="author-role">Voluntária</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                "No meu bairro, o projeto da Synergia fez toda a diferença. Não só
                recolhemos o lixo, mas ganhamos um espaço revitalizado e seguro para as
                famílias. Devolveu o cuidado e o orgulho para a nossa região."
              </p>
              <div className="testimonial-author">
                <img
                  src="/img/Captura de tela 2025-11-11 204724.png"
                  alt="Pietra Lima"
                  className="author-image"
                />
                <div className="author-info">
                  <p className="author-name">Pietra Lima</p>
                  <p className="author-role">Voluntária</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para fazer a diferença?</h2>
            <p>
              Junte-se a milhares de voluntários que estão transformando comunidades 
              e protegendo nosso planeta todos os dias.
            </p>
            <div className="cta-buttons">
              <a href="/cadastro" className="btn btn-primary large">
                Começar Agora
                <span className="btn-icon">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <h3>SYNERGIA</h3>
              <p>
                Conectando voluntários a projetos que transformam comunidades locais 
                através de ações de limpeza, sustentabilidade e revitalização.
              </p>
              <div className="social-links">
                <a href="#" aria-label="Instagram">📷</a>
                <a href="#" aria-label="Facebook">📘</a>
                <a href="#" aria-label="Twitter">🐦</a>
              </div>
            </div>

            <div className="footer-links">
              <h4>Links Rápidos</h4>
              <ul>
                <li><a href="#home">Início</a></li>
                <li><a href="#about">Sobre Nós</a></li>
                <li><a href="#projects">Projetos</a></li>
                <li><a href="#how-it-works">Como Funciona</a></li>
                <li><a href="#contact">Contato</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h4>Contato</h4>
              <p>Email: contato@synergia.org</p>
              <p>Telefone: (11) 9999-9999</p>
              <p>São Paulo, Brasil</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 SYNERGIA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}