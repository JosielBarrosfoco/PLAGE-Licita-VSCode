const services = [
  {
    number: "01",
    title: "Análise de editais",
    text: "Leitura técnica e estratégica para identificar exigências, riscos, prazos e oportunidades antes da disputa.",
  },
  {
    number: "02",
    title: "Propostas e habilitação",
    text: "Organização documental, composição da proposta e conferência dos requisitos para uma participação mais segura.",
  },
  {
    number: "03",
    title: "Pregões eletrônicos",
    text: "Acompanhamento da sessão, estratégia de lances e apoio nas etapas de negociação, aceitação e habilitação.",
  },
  {
    number: "04",
    title: "Gestão do processo",
    text: "Controle de oportunidades, documentos, fornecedores, prazos e entregas em uma rotina clara e rastreável.",
  },
];

const steps = [
  ["Diagnóstico", "Entendimento do negócio, capacidade de fornecimento e objetivos."],
  ["Seleção", "Triagem de oportunidades compatíveis com o perfil da empresa."],
  ["Preparação", "Edital, documentação, proposta, custos e estratégia de disputa."],
  ["Acompanhamento", "Sessão pública, diligências, resultado e próximos passos."],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.2V18M6.5 5.2v.1M10.7 18v-5.5c0-2.8 4.8-3.1 4.8.3V18M10.7 9.8V18" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="PLAGE Licita - início">
          <span className="brand-mark">
            <img src="/assets/plage-licita-simbolo.png" alt="" />
          </span>
          <span>
            <strong>PLAGE</strong> Licita
            <small>Gestão para o setor público</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a>
          <a href="#metodo">Como funciona</a>
          <a href="#sobre">Sobre</a>
        </nav>
        <a className="button button-small" href="https://wa.me/5595981249755?text=Olá%20Josiel,%20quero%20entender%20como%20a%20PLAGE%20Licita%20pode%20ajudar%20minha%20empresa." target="_blank" rel="noreferrer">
          Falar com especialista
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Gestão de licitações públicas</p>
          <h1>Sua empresa pronta para <em>vender ao governo.</em></h1>
          <p className="hero-lead">
            Estratégia, organização e tecnologia para transformar editais em
            oportunidades reais — com mais clareza, controle e segurança em cada etapa.
          </p>
          <div className="hero-actions">
            <a className="button" href="https://wa.me/5595981249755?text=Olá%20Josiel,%20gostaria%20de%20falar%20sobre%20gestão%20de%20licitações." target="_blank" rel="noreferrer">
              Solicitar diagnóstico <ArrowIcon />
            </a>
            <a className="text-link" href="#servicos">Conhecer os serviços <ArrowIcon /></a>
          </div>
          <div className="hero-proof">
            <div><strong>Especialista</strong><span>Formação em Gestão de Licitação</span></div>
            <div><strong>Visão 360°</strong><span>Gestão, tecnologia e processos</span></div>
            <div><strong>Atendimento</strong><span>Estratégico e personalizado</span></div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="document-card">
            <div className="document-top">
              <span className="doc-icon">PL</span>
              <span className="live-dot">Oportunidade analisada</span>
            </div>
            <p>PROCESSO LICITATÓRIO</p>
            <h2>Decisão com base em dados, não em improviso.</h2>
            <div className="status-row">
              <span>Compatibilidade técnica</span>
              <strong>92%</strong>
            </div>
            <div className="progress"><i /></div>
            <ul>
              <li><CheckIcon /> Edital e anexos conferidos</li>
              <li><CheckIcon /> Documentação habilitada</li>
              <li><CheckIcon /> Estratégia de disputa definida</li>
            </ul>
          </div>
          <div className="floating-card floating-top">
            <span>Próxima etapa</span><strong>Pregão eletrônico</strong>
          </div>
          <div className="floating-card floating-bottom">
            <span>Processo organizado</span><strong>Do edital à entrega</strong>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <span>Gestão</span><i /> <span>Inteligência</span><i /> <span>Processos</span><i /> <span>Tecnologia</span>
      </div>

      <section className="section services" id="servicos">
        <div className="section-heading">
          <div>
            <p className="eyebrow dark"><span /> Serviços especializados</p>
            <h2>Estrutura para competir.<br /><em>Segurança para avançar.</em></h2>
          </div>
          <p>Uma atuação pensada para empresas que desejam entrar ou crescer no mercado de compras públicas sem perder o controle da operação.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.number}>
              <span className="service-number">{service.number}</span>
              <div className="service-symbol" aria-hidden="true">↗</div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <a href="#contato">Conversar sobre este serviço <ArrowIcon /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="method" id="metodo">
        <div className="method-intro">
          <p className="eyebrow"><span /> Método PLAGE</p>
          <h2>Da oportunidade<br />à contratação.</h2>
          <p>Um processo simples de acompanhar, técnico nas decisões e próximo de quem está à frente do negócio.</p>
          <a className="button button-light" href="#contato">Começar agora <ArrowIcon /></a>
        </div>
        <div className="steps">
          {steps.map(([title, text], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section advantage">
        <div className="advantage-visual">
          <div className="radar">
            <span>EDITAL</span><span>PROPOSTA</span><span>DISPUTA</span><span>CONTRATO</span>
            <strong>PL</strong>
          </div>
        </div>
        <div className="advantage-copy">
          <p className="eyebrow dark"><span /> Por que a PLAGE Licita</p>
          <h2>Licitação exige técnica.<br /><em>Resultado exige gestão.</em></h2>
          <p>Não se trata apenas de encontrar editais. É preciso avaliar aderência, antecipar riscos, organizar documentos, proteger a margem e acompanhar cada prazo.</p>
          <ul>
            <li><CheckIcon /><div><strong>Visão de negócio</strong><span>Análise da oportunidade considerando capacidade, operação e resultado.</span></div></li>
            <li><CheckIcon /><div><strong>Processo organizado</strong><span>Informações e decisões estruturadas para evitar perda de prazo.</span></div></li>
            <li><CheckIcon /><div><strong>Tecnologia aplicada</strong><span>Ferramentas e dados apoiando uma gestão mais rápida e confiável.</span></div></li>
          </ul>
        </div>
      </section>

      <section className="about" id="sobre">
        <div className="about-image">
          <img src="/assets/josiel-barros-profissional.png" alt="Retrato profissional de Josiel Barros" />
        </div>
        <div className="about-copy">
          <p className="eyebrow"><span /> Quem está por trás</p>
          <h2>Estratégia com visão<br />de quem também empreende.</h2>
          <p>Sou <strong>Josiel Barros</strong>, gestor de licitações, desenvolvedor e empreendedor. Uno gestão empresarial, tecnologia e análise de dados para ajudar empresas a participarem de compras públicas com método e clareza.</p>
          <blockquote>“Minha missão é simplificar processos complexos e transformar informação em decisões mais seguras.”</blockquote>
          <div className="credentials">
            <span>Gestor de Licitações — Nível Especialista</span>
            <span>Gestão Empresarial e Tecnologia</span>
          </div>
          <a
            className="linkedin-profile"
            href="https://www.linkedin.com/in/josiel-barros/"
            target="_blank"
            rel="noreferrer"
            aria-label="Acessar o perfil pessoal de Josiel Barros no LinkedIn"
          >
            <LinkedInIcon />
            <span>
              <small>Conecte-se comigo</small>
              Perfil de Josiel Barros no LinkedIn
            </span>
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="section faq">
        <div>
          <p className="eyebrow dark"><span /> Dúvidas frequentes</p>
          <h2>Antes de começar,<br /><em>você precisa saber.</em></h2>
        </div>
        <div className="faq-list">
          <details open><summary>Minha empresa nunca participou. Posso começar?</summary><p>Sim. O primeiro passo é avaliar a regularidade da empresa, sua capacidade de fornecimento e quais oportunidades fazem sentido para o seu momento.</p></details>
          <details><summary>Vocês atendem qualquer tipo de empresa?</summary><p>O diagnóstico inicial verifica se a operação, os produtos ou os serviços da empresa são compatíveis com o mercado público e qual formato de apoio é mais adequado.</p></details>
          <details><summary>O serviço garante que vou vencer?</summary><p>Nenhuma consultoria séria pode garantir vitória. O trabalho reduz riscos, melhora a preparação e aumenta a qualidade das decisões e da participação.</p></details>
          <details><summary>O atendimento pode ser totalmente online?</summary><p>Sim. A análise, a organização documental e o acompanhamento podem ser realizados de forma remota, com comunicação direta em cada etapa.</p></details>
        </div>
      </section>

      <section className="cta" id="contato">
        <div>
          <p className="eyebrow"><span /> Próximo passo</p>
          <h2>Sua próxima oportunidade<br />pode começar aqui.</h2>
        </div>
        <div>
          <p>Converse com um especialista e descubra o melhor caminho para sua empresa começar ou evoluir nas licitações públicas.</p>
          <a className="button button-light" href="https://wa.me/5595981249755?text=Olá%20Josiel,%20quero%20solicitar%20um%20diagnóstico%20para%20minha%20empresa." target="_blank" rel="noreferrer">
            Falar no WhatsApp <ArrowIcon />
          </a>
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio">
          <span className="brand-mark"><img src="/assets/plage-licita-simbolo.png" alt="" /></span>
          <span><strong>PLAGE</strong> Licita<small>Gestão para o setor público</small></span>
        </a>
        <p>Gestão • Inteligência • Processos • Tecnologia</p>
        <div className="footer-contact">
          <a href="mailto:atendimento@plagetecnologia.com.br">atendimento@plagetecnologia.com.br</a>
          <a href="tel:+5595981249755">(95) 98124-9755</a>
          <a
            className="linkedin-company"
            href="https://www.linkedin.com/company/plage-licita/about/?viewAsMember=true"
            target="_blank"
            rel="noreferrer"
            aria-label="Acessar a página da PLAGE Licita no LinkedIn"
          >
            <LinkedInIcon /> PLAGE Licita no LinkedIn
          </a>
        </div>
        <small>© 2026 PLAGE Licita. Todos os direitos reservados.</small>
      </footer>
    </main>
  );
}
