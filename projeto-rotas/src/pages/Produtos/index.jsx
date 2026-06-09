import './style.css';

function Produtos() {
  return (
    <main className="produtos-container">
      {/* Seção Principal */}
      <section className="hero-section">
        <h1 className="produtos-title">Nossos Produtos Digitais</h1>
        <p className="produtos-text">
          Ferramentas tecnológicas integradas de última geração, criadas especificamente para 
          automatizar as tarefas burocráticas do seu negócio e otimizar a sua gestão financeira diária.
        </p>
      </section>

      {/* Seção de Cards de Produtos */}
      <section className="cards-container">
        <div className="card">
          <div className="card-icon">🧾</div>
          <h3>Emissor de Faturas Pro</h3>
          <p>Emita faturas ilimitadas, recibos e notas de crédito em segundos, totalmente certificado pela Autoridade Tributária.</p>
        </div>

        <div className="card">
          <div className="card-icon">📱</div>
          <h3>App de Despesas</h3>
          <p>Digitalize os seus talões com a câmara do telemóvel. A nossa IA lê os dados e lança-os automaticamente na sua conta.</p>
        </div>

        <div className="card">
          <div className="card-icon">🔑</div>
          <h3>Certificado Digital</h3>
          <p>Assine contratos e documentos digitais à distância com total segurança, confidencialidade e validade legal automática.</p>
        </div>
      </section>
    </main>
  );
}

export default Produtos;