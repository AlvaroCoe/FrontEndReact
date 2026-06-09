import './style.css';

function SobreNos() {
  return (
    <main className="sobre-container">
      <section className="sobre-hero">
        <h1 className="sobre-title">Nossa História</h1>
        <p className="sobre-text">
          Nascemos com o propósito de transformar a relação entre os empreendedores e a contabilidade. 
          Deixamos o modelo tradicional de papel e burocracia para trás, criando uma plataforma 
          100% digital que simplifica a gestão do seu negócio. Combinamos tecnologia de ponta com um 
          atendimento humanizado para garantir que a sua empresa cresça com segurança financeira.
        </p>
      </section>

      <section className="valores-container">
        <div className="valor-card">
          <div className="valor-icon">🎯</div>
          <h3>Missão</h3>
          <p>Descomplicar a contabilidade através da tecnologia, dando liberdade para o empresário focar no crescimento do seu negócio.</p>
        </div>

        <div className="valor-card">
          <div className="valor-icon">👁️‍🗨️</div>
          <h3>Visão</h3>
          <p>Ser a plataforma de contabilidade digital de referência em inovação, transparência e satisfação do cliente em todo o país.</p>
        </div>

        <div className="valor-card">
          <div className="valor-icon">🤝</div>
          <h3>Valores</h3>
          <p>Transparência total, ética inabalável, inovação constante e parceria real com cada um dos nossos clientes.</p>
        </div>
      </section>
    </main>
  );
}

export default SobreNos;