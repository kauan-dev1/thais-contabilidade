const services = [
  {
    title: "Abertura e regularização de empresas",
    text: "Escolha do enquadramento, CNAEs, CNPJ, inscrições, alterações contratuais e organização inicial para começar sem retrabalho.",
  },
  {
    title: "Impostos e obrigações fiscais",
    text: "Apuração, guias, prazos e acompanhamento das rotinas fiscais para Simples Nacional, MEI, Lucro Presumido e outros regimes.",
  },
  {
    title: "Escrituração contábil e fiscal",
    text: "Registro das movimentações, conciliação, fechamento mensal, balancetes e demonstrativos para manter a empresa em ordem.",
  },
  {
    title: "Folha de pagamento e pró-labore",
    text: "Admissões, férias, rescisão, eSocial, encargos, folha mensal e orientação sobre retirada dos sócios.",
  },
  {
    title: "MEI, autônomos e prestadores",
    text: "Regularização, DAS, declaração anual, emissão de notas, desenquadramento e transição para microempresa quando chegar a hora.",
  },
  {
    title: "IRPF, IRPJ e declarações",
    text: "Declaração de imposto de renda, organização de documentos, informes, bens, rendimentos e suporte para pendências.",
  },
  {
    title: "Planejamento tributário",
    text: "Análise do regime mais adequado, simulações e orientações para pagar corretamente sem perder oportunidades legais.",
  },
  {
    title: "Consultoria para gestão financeira",
    text: "Leitura de números, fluxo de caixa, indicadores e apoio para decisões de preço, contratação, investimento e crescimento.",
  },
];

const process = [
  "Diagnóstico da situação atual",
  "Organização de documentos e acessos",
  "Calendário de prazos e entregas",
  "Rotina mensal com acompanhamento",
];

const audiences = [
  "MEIs que estão crescendo",
  "Autônomos e profissionais liberais",
  "Prestadores de serviços",
  "Comércios e pequenos negócios",
  "Empresas do Simples Nacional",
  "Sócios que precisam de pró-labore",
];

const faqs = [
  {
    q: "Preciso de contador mesmo sendo MEI?",
    a: "Em muitos casos o MEI consegue cumprir obrigações simples sozinho, mas o contador ajuda quando há funcionário, nota fiscal, pendências, crescimento, desenquadramento ou dúvidas sobre impostos.",
  },
  {
    q: "O atendimento pode ser online?",
    a: "Sim. A rotina pode funcionar por WhatsApp, e-mail e reuniões online, com envio digital de documentos e acompanhamento dos prazos.",
  },
  {
    q: "Da para trocar de contador?",
    a: "Dá. O processo normalmente envolve diagnóstico, documentos da empresa, acessos, situação fiscal e alinhamento da rotina mensal para evitar perda de prazos.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <nav className="nav-shell" aria-label="Navegacao principal">
          <a className="brand" href="#inicio" aria-label="Ir para o inicio">
            <span className="brand-mark">CT</span>
            <span>
              <strong>Contabilidade Thaís</strong>
              <small>CRC 999999/O-9</small>
            </span>
          </a>
          <div className="nav-links">
            <a href="#servicos">Servicos</a>
            <a href="#metodo">Metodo</a>
            <a href="#contato">Contato</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy reveal">
            <p className="eyebrow">Contabilidade consultiva para pequenos negócios</p>
            <h1>Impostos, empresa e rotina financeira com clareza o ano inteiro.</h1>
            <p className="hero-text">
              Atendimento contábil para empreendedores, autônomos e empresas que
              querem cumprir prazos, entender os números e tomar decisões com mais
              segurança.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="https://wa.me/5599999999999">
                <span>Chamar no WhatsApp</span>
                <span className="btn-dot" aria-hidden="true">+</span>
              </a>
              <a className="btn secondary" href="#servicos">
                Ver servicos
              </a>
            </div>
            <div className="trust-row" aria-label="Destaques do atendimento">
              <span>Atendimento online</span>
              <span>Fechamento mensal</span>
              <span>Guias e prazos</span>
            </div>
          </div>

          <div className="hero-visual reveal" aria-label="Painel visual de fechamento contábil">
            <div className="ledger-board">
              <div className="board-header">
                <span>Fechamento mensal</span>
                <strong>OK</strong>
              </div>
              <div className="tax-card main-card">
                <div>
                  <small>Impostos do mês</small>
                  <strong>R$ 9.999,99</strong>
                </div>
                <span>venc. 20</span>
              </div>
              <div className="mini-grid">
                <div>
                  <small>DAS</small>
                  <strong>Emitido</strong>
                </div>
                <div>
                  <small>eSocial</small>
                  <strong>Conferido</strong>
                </div>
                <div>
                  <small>Notas</small>
                  <strong>128</strong>
                </div>
                <div>
                  <small>Caixa</small>
                  <strong>Fechado</strong>
                </div>
              </div>
              <div className="paper-stack">
                <span />
                <span />
                <span />
              </div>
              <div className="calendar-strip">
                <b>05</b>
                <b>12</b>
                <b>20</b>
                <b>28</b>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Menos susto, mais previsibilidade</p>
          <h2>Uma contabilidade para quem quer saber o que está acontecendo.</h2>
        </div>
        <div className="intro-copy reveal">
          <p>
            A rotina contábil não precisa aparecer só quando vence uma guia ou
            surge uma pendência. A proposta é organizar documentos, impostos,
            folha, declarações e indicadores para que a empresa tenha uma base
            confiável todos os meses.
          </p>
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="section-heading reveal">
          <p className="eyebrow">Servicos</p>
          <h2>Rotinas essenciais para manter sua empresa regular e pronta para crescer.</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.title}>
              <span className="service-line" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="method section" id="metodo">
        <div className="method-panel reveal">
          <div>
            <p className="eyebrow">Metodo de trabalho</p>
            <h2>Do diagnóstico ao acompanhamento mensal.</h2>
            <p>
              Primeiro vem a leitura da situação fiscal e documental. Depois,
              uma rotina simples para saber o que enviar, quando pagar e quais
              pontos merecem atenção.
            </p>
          </div>
          <ol>
            {process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section audience-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Para quem</p>
          <h2>Atendimento pensado para negócios pequenos, prestadores e autônomos.</h2>
        </div>
        <div className="audience-grid">
          {audiences.map((item) => (
            <div className="audience-pill reveal" key={item}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section faq-section">
        <div className="section-heading reveal">
          <p className="eyebrow">Dúvidas comuns</p>
          <h2>Antes de chamar, vale entender o basico.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item reveal" key={faq.q}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="contact section" id="contato">
        <div className="contact-panel reveal">
          <div>
            <p className="eyebrow">Contato</p>
            <h2>Vamos organizar a contabilidade do seu negocio?</h2>
            <p>
              Envie uma mensagem com seu tipo de empresa, cidade e a principal
              dúvida do momento. Os dados abaixo estão como exemplo para edição.
            </p>
          </div>
          <div className="contact-card">
            <a className="btn primary full" href="https://wa.me/5599999999999">
              <span>(99) 99999-9999</span>
              <span className="btn-dot" aria-hidden="true">+</span>
            </a>
            <dl>
              <div>
                <dt>E-mail</dt>
                <dd>contato@contabilidadethais.com.br</dd>
              </div>
              <div>
                <dt>Atendimento</dt>
                <dd>Online e presencial em Cidade/UF</dd>
              </div>
              <div>
                <dt>Horario</dt>
                <dd>Segunda a sexta, 9h as 18h</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
