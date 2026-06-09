import './style.css';

function Servicos() {
  return (
    <main className="servicos-container">
      {/* Seção Principal */}
      <section className="hero-section">
        <h1 className="servicos-title">Serviços Especializados</h1>
        <p className="servicos-text">
          Contamos com uma equipa de contabilistas certificados e peritos fiscais prontos para apoiar o 
          crescimento do seu negócio. Do microempreendedor à grande empresa, nós cuidamos de tudo.
        </p>
      </section>

      {/* Seção de Cards de Serviços */}
      <section className="cards-container">
        <div className="card">
          <div className="card-icon">📈</div>
          <h3>Consultoria Fiscal</h3>
          <p>Planeamento fiscal estratégico para reduzir legalmente a carga tributária da sua empresa e maximizar lucros.</p>
        </div>

        <div className="card">
          <div className="card-icon">👥</div>
          <h3>Processamento de Salários</h3>
          <p>Gestão completa de RH: emissão de recibos de vencimento, segurança social, contratos e declarações anuais.</p>
        </div>

        <div className="card">
          <div className="card-icon">🔍</div>
          <h3>Auditoria Financeira</h3>
          <p>Análise profunda das suas contas para identificar riscos, corrigir falhas e garantir conformidade legal absoluta.</p>
        </div>
      </section>
    </main>
  );
}

export default Servicos;