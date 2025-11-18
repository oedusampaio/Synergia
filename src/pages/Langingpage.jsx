import "../landingpage.css";

export default function LandingPage() {
  return (
    <>
      {/* HERO / NAVBAR */}
      <header className="hero-section">
        <div className="navbar">
          <div className="logo"></div>

          <nav>
            <a href="#about">Sobre Nós</a>
            <a href="pages/LAginpage.jsx">Início</a>
            <a href="#how-it-works">Como funciona</a>
            <a href="/contato">Contato</a>
            <a href="#projects">Projetos</a>
          </nav>
        </div>

        <div className="hero-content">
          <h1>Como podemos mudar o mundo?</h1>
          <p>Tudo começa com um simples passo.</p>

          <div className="hero-buttons">
            <a href="/cadastro" className="btn-volunteer">Seja Voluntário</a>
            <a href="/login" className="btn-login">Login</a>
          </div>
        </div>
      </header>

      {/* SOBRE A SYNERGIA */}
      <section className="about-section container" id="about">
        <div className="about-text-content">
          <h2>A SYNERGIA: Juntos pelo Planeta, pelas Pessoas e pelos Animais</h2>
          <p>
            A SYNERGIA é uma ONG comprometida em transformar o mundo por meio da união
            de pessoas com um propósito comum: cuidar do nosso planeta e apoiar comunidades
            e proteger os animais e/ou ecossistemas impactados pela poluição.
          </p>
        </div>

        <div className="mission-highlight">
          <div className="mission-text">
            <p>Acreditamos que pequenas ações, quando somadas, geram grandes transformações.</p>
          </div>

          <div className="mission-image">
            <img src="/img/1728002025.98.webp" alt="Crianças sorrindo" />
          </div>
        </div>

        <div className="mission-statement">
          <div className="mission-image-large">
            <img
              src="/img/Captura de tela 2025-11-11 203644.png"
              alt="Voluntários limpando"
            />
          </div>

          <div className="mission-text-content">
            <h3>Nossa Missão</h3>
            <p>
              Na SYNERGIA, unimos pessoas com um propósito: cuidar do planeta,
              apoiar comunidades e proteger animais.
            </p>
            <p>
              Trabalhamos na recuperação de áreas poluídas, revitalização de rios,
              apoio a comunidades e projetos pedagógicos ou de preservação ambiental
              para inspirar mudanças.
            </p>
          </div>
        </div>
      </section>

      {/* LOCAIS */}
      <section className="available-locations container" id="projects">
        <h2>Locais Disponíveis</h2>

        <div className="locations-grid">
          {/* CARD 1 */}
          <div className="location-card">
            <div className="card-image">
              <img
                src="/img/10959590_792619874158483_8119899953917673467_n.jpg.73afdd56c775ed0d62944fa6ebe39667.jpg"
                alt="Voluntário em Cipó-Guaçu"
              />
            </div>
            <p>Cipó-Guaçu</p>
            <a href="/cipo" className="btn-link">
              <button className="btn-details">Ver Detalhes</button>
            </a>
          </div>

          {/* CARD 2 */}
          <div className="location-card">
            <div className="card-image">
              <img
                src="/img/Captura de tela 2025-11-11 204254.png"
                alt="Voluntário no Guarujá"
              />
            </div>
            <p>Guarujá</p>
            <a href="/guaruja" className="btn-link">
              <button className="btn-details">Ver Detalhes</button>
            </a>
          </div>

          {/* CARD 3 */}
          <div className="location-card">
            <div className="card-image">
              <img
                src="/img/Captura de tela 2025-11-11 204408.png"
                alt="Voluntário no Rio Tietê"
              />
            </div>
            <p>Rio Tietê</p>
            <a href="/rio-tiete" className="btn-link">
              <button className="btn-details">Ver Detalhes</button>
            </a>
          </div>
        </div>
      </section>

      {/* COMO SER VOLUNTÁRIO */}
      <section className="how-to-volunteer container" id="how-it-works">
        <h2>Como ser um Voluntário</h2>

        <div className="step-card">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>Escolha um local próximo a você</h3>
            <p>
              Encontre uma comunidade, bairro ou área que precise de apoio. Quanto
              mais perto, mais fácil participar e acompanhar os resultados.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>Escolha uma ação ou projeto próximo a você</h3>
            <p>
              Decida como quer contribuir: ajudar na limpeza, revitalização, apoio a
              animais ou projetos educativos. Escolha algo que combine com você.
            </p>
          </div>
        </div>

        <div className="step-card">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>Inscreva-se e participe</h3>
            <p>
              Cadastre-se em nosso site ou entre em contato com a equipe local. Receba
              todas as instruções e horários para começar a atuar.
            </p>
          </div>
        </div>

        <div className="step-card step-card-last">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>Faça a diferença e inspire outros</h3>
            <p>
              Colabore com a comunidade, veja os resultados do seu trabalho e
              compartilhe sua experiência para motivar mais pessoas a se engajar.
            </p>
          </div>
        </div>
      </section>

      {/* FEEDBACKS */}
      <section className="feedbacks-section container">
        <h2>FEEDBACKS SYNERGIES</h2>

        <div className="feedbacks-grid">
          {/* FEEDBACK 1 */}
          <div className="feedback-card">
            <div className="quote-icon">"</div>
            <p>
              "Sou apaixonada pela causa animal, e o apoio da Synergia aos ecossistemas
              poluídos é vital. É um trabalho sério, que combina o amor pela natureza
              com a responsabilidade de quem age. O impacto é real."
            </p>
            <div className="profile">
              <img
                src="/img/Captura de tela 2025-11-11 204724.png"
                alt="Emanuel Boyle"
                className="profile-pic"
              />
              <p className="role">Voluntaria</p>
              <p className="name">Emanuel Boyle</p>
            </div>
          </div>

          {/* FEEDBACK 2 */}
          <div className="feedback-card">
            <div className="quote-icon">"</div>
            <p>
              "Participar da Synergia me mostrou o poder da ação local. Ver a comunidade
              unida, limpando o rio e ensinando as crianças sobre sustentabilidade, é
              inspirador. É mais do que limpeza, é esperança."
            </p>
            <div className="profile">
              <img
                src="/img/Captura de tela 2025-11-11 204657.png"
                alt="Ana Beatriz"
                className="profile-pic"
              />
              <p className="role">Voluntaria</p>
              <p className="name">Ana Beatriz</p>
            </div>
          </div>

          {/* FEEDBACK 3 */}
          <div className="feedback-card">
            <div className="quote-icon">"</div>
            <p>
              "No meu bairro, o projeto da Synergia fez toda a diferença. Não só
              recolhemos o lixo, mas ganhamos um espaço revitalizado e seguro para as
              famílias. Devolveu o cuidado e o orgulho para a nossa região."
            </p>
            <div className="profile">
              <img
                src="/img/Captura de tela 2025-11-11 204724.png"
                alt="Pietra Lima"
                className="profile-pic"
              />
              <p className="role">Voluntaria</p>
              <p className="name">Pietra Lima</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-content container">
          <div className="footer-about">
            <h4>SYNERGIA</h4>
            <p>
              Conectando voluntários a projetos que transformam comunidades locais através de ações de limpeza,
              sustentabilidade e revitalização.
            </p>
          </div>

          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#home">Início</a></li>
              <li><a href="#about">Sobre Nós</a></li>
              <li><a href="#projects">Projetos</a></li>
              <li><a href="#how-it-works">Como Funciona</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2025 SYNERGIA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
