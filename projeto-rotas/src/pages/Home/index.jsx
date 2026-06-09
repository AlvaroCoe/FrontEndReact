import './style.css';

function Home() {
  return (
    <main className="home-container">
      {/* Seção Principal */}
      <section className="hero-section">
        <h1 className="home-title">A contabilidade do seu negócio, de um jeito inteligente.</h1>
        <p className="home-text">
          Abra a sua empresa gratuitamente, emita faturas sem complicação e tenha o controlo financeiro
          da sua empresa na palma da mão. Uma solução digital completa, segura e feita por especialistas.
        </p>
        <button className="cta-button">Começar Agora</button>
      </section>

      {/* Seção de Cards de Serviços */}
      <section className="cards-container">
        <div className="card">
          <div className="card-icon">📊</div>
          <h3>Gestão Financeira</h3>
          <p>Acompanhe o seu fluxo de caixa e relatórios de desempenho em tempo real através da nossa plataforma web.</p>
        </div>

        <div className="card">
          <div className="card-icon">💼</div>
          <h3>Abertura de Empresa</h3>
          <p>Tratamos de todo o processo de abertura e registo legal para que possa começar a faturar o quanto antes.</p>
        </div>

        <div className="card">
          <div className="card-icon">🧾</div>
          <h3>Rotina Fiscal Completa</h3>
          <p>Cálculo de impostos, guias de pagamento e entrega de obrigações fiscais sem erros e dentro do prazo.</p>
        </div>
      </section>
    </main>
  );
}

export default Home;