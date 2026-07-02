import './style.css'

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <h1>Bem-vindo ao Gestor de Usuários</h1>
        <p>
          Sua solução corporativa para cadastro, gerenciamento e controle de usuários com
          eficiência, segurança e facilidade de uso.
        </p>
      </section>

      <section className="home-content">
        <div className="home-card">
          <h2>Gestão simplificada</h2>
          <p>
            Centralize todas as informações de cadastro em um único ambiente intuitivo.
            Agilize processos operacionais e mantenha os dados dos usuários sempre atualizados.
          </p>
        </div>

        <div className="home-card">
          <h2>Controle e conformidade</h2>
          <p>
            Otimize o controle de acesso e garanta conformidade com as políticas internas.
            Sua equipe conta com um sistema forte, confiável e pronto para escalar.
          </p>
        </div>

        <div className="home-card">
          <h2>Resultados para o negócio</h2>
          <p>
            Reduza o tempo de rotina administrativa e foque no que importa: crescimento,
            produtividade e uma experiência de atendimento melhor para seus usuários.
          </p>
        </div>
      </section>
    </main>
  )
}
