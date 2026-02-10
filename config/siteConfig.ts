
import { SiteData } from '../types/siteData';

export const defaultSiteData: SiteData = {
  id: 'jcl-consultoria',
  domain: 'jclconsultoria.com.br',
  settings: {
    companyName: 'JCL Consultoria & Negócios',
    slogan: 'Excelência e Credibilidade em Soluções Financeiras',
    contact: {
      phone: '(81) 99454-4342',
      whatsapp: '5581994544342',
      email: 'comercial@consultoriajcl.com.br',
      address: {
        street: 'Av. Antônio Tôrres Galvão 221 | Imbiribeira, Recife - PE',
        number: '221',
        neighborhood: 'Imbiribeira',
        city: 'Recife',
        state: 'PE',
        zipCode: '51160-330'
      }
    },
    socialMedia: {
      instagram: 'jclconsultoria',
      linkedin: 'jcl-consultoria-negocios'
    },
    colors: {
      primary: '#002147',
      secondary: '#0056b3',
      accent: '#00a8cc',
      background: '#f8fafc',
      foreground: '#0f172a'
    },
    openingHours: 'Seg - Sex: 09:00 - 18:00',
    priceRange: '$$'
  },
  pages: {
    home: {
      hero: {
        title: 'Transforme seu futuro financeiro com quem entende de mercado.',
        subtitle: 'as melhores soluções de crédito com taxas competitivas. Antecipação, crédito e consultoria especializada.',
        cta: 'Soluções'
      },
      quickStepsTitle: 'Rápido e Prático',
      benefitsTitle: 'Por que escolher a JCL?',
      benefits: [
        { title: 'Taxas Competitivas', description: 'Trabalhamos com os maiores bancos para garantir o menor custo.', icon: 'Zap' },
        { title: 'Atendimento Personalizado', description: 'Um consultor dedicado para entender sua real necessidade.', icon: 'Users' },
        { title: 'Agilidade Digital', description: 'Processos 100% online com liberação em tempo recorde.', icon: 'Clock' }
      ],
      testimonials: [
        { name: 'Bruno Alves', role: 'Lustre Instalações', content: 'A consultoria financeira superou minhas expectativas. Sua análise financeira detalhada e recomendações estratégicas nos permitiram tomar decisões informadas e maximizar nossos lucros. Não poderíamos estar mais satisfeitos com os resultados.', avatar: 'https://picsum.photos/id/64/100/100' },
        { name: 'Lucas Souza', role: 'Plus+ Agência', content: 'Estávamos enfrentando desafios financeiros complexos, mas a consultoria financeira foi a luz no fim do túnel. Com sua abordagem personalizada e expertise, eles nos guiaram na reestruturação financeira, resultando em uma empresa mais saudável e lucrativa.', avatar: 'https://picsum.photos/id/65/100/100' }
      ],
      faqs: [
        { question: 'Quanto tempo demora a aprovação?', answer: 'Em média, nossas análises são concluídas em até 24 horas úteis após o envio da documentação.' },
        { question: 'Quais documentos são necessários?', answer: 'Geralmente RG, CPF, comprovante de residência e extratos bancários recentes.' }
      ]
    },
    sobre: {
      title: 'Sobre a JCL Consultoria',
      content: [
        'A JCL Consultoria & Negócios nasceu com o propósito de democratizar o acesso ao crédito inteligente para pessoas físicas e jurídicas.',
        'Com anos de experiência no mercado financeiro, nossa equipe é composta por especialistas que buscam as melhores oportunidades de captação e investimento para nossos clientes.'
      ],
      mission: 'Prover soluções financeiras éticas e ágeis que impulsionem sonhos e negócios.',
      vision: 'Ser a principal referência em consultoria de crédito no Brasil até 2026.',
      values: ['Ética', 'Transparência', 'Inovação', 'Foco no Cliente']
    },
    solucoes: {
      title: 'Nossas Soluções',
      subtitle: 'Encontre o crédito ideal para o seu momento atual.',
      searchPlaceholder: 'O que você está procurando?'
    },
    contato: {
      title: 'Fale Conosco',
      subtitle: 'Nossa equipe está pronta para te atender.',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197472094254!2d-46.65421292466986!3d-23.561349678800165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da172201%3A0x6a161f3647306263!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr'
    }
  },
  solutions: [
    {
  id: '1',
  slug: 'financiamento-de-maquinas-e-equipamentos',
  title: 'Financiamento e refinanciamento de máquinas e equipamentos',
  headline: 'Invista na estrutura do seu negócio sem descapitalizar.',
  shortDescription: 'Crédito para aquisição de máquinas, equipamentos e bens produtivos novos ou usados.',
  description: 'O financiamento de máquinas e equipamentos permite que sua empresa adquira bens essenciais para produção, modernização ou expansão, com prazos longos e taxas competitivas. Ideal para empresas que desejam crescer sem comprometer o fluxo de caixa.',
  benefits: [
    'Prazos longos para pagamento',
    'Taxas reduzidas para bens produtivos',
    'Preserva o capital de giro',
    'Financiamento de bens novos ou usados'
  ],
  requirements: [
    'CNPJ ativo',
    'Análise de crédito da empresa',
    'Máquina ou equipamento elegível'
  ],
  howItWorks: [
    { number: 1, title: 'Escolha do Bem', description: 'Defina a máquina ou equipamento que deseja adquirir.' },
    { number: 2, title: 'Análise', description: 'Enviamos sua proposta para instituições financeiras parceiras.' },
    { number: 3, title: 'Liberação', description: 'Após aprovação, o pagamento é feito ao fornecedor.' }
  ],
  faqs: [
    { question: 'Pode financiar equipamento usado?', answer: 'Sim, desde que esteja dentro das políticas do banco parceiro.' }
  ],
  ctaText: 'Solicitar financiamento',
  icon: 'Factory'
}
,
    {
      id: '2',
      slug: 'financiamento-e-refinamento-de-veiculos',
      title: 'Financiamento e refinanciamento de veículo',
      headline: 'Conquiste seu carro novo com as melhores taxas.',
      shortDescription: 'Crédito rápido para veículos novos e seminovos com prazos flexíveis.',
      description: 'Financie até 100% do valor do seu veículo com taxas competitivas e prazos de até 60 meses. Atendemos carros, motos e pesados.',
      benefits: ['Taxas personalizadas', 'Até 60 meses para pagar', 'Aprovação digital', 'Sem burocracia'],
      requirements: ['Análise de crédito', 'CNH válida', 'Comprovante de renda'],
      howItWorks: [
        { number: 1, title: 'Escolha o Veículo', description: 'Pode ser de concessionária ou particular.' },
        { number: 2, title: 'Faça a Simulação', description: 'Enviamos sua proposta para os principais bancos.' },
        { number: 3, title: 'Contratação', description: 'Assinatura digital e pagamento ao vendedor.' }
      ],
      faqs: [
        { question: 'Posso financiar 100%?', answer: 'Sujeito à análise de crédito e política do banco parceiro.' }
      ],
      ctaText: 'Simular financiamento',
      icon: 'Car'
    },
    {
      id: '3',
      slug: 'capital-de-giro',
      title: 'Capital de Giro',
      headline: 'O fôlego que sua empresa precisa para crescer.',
      shortDescription: 'Linhas de crédito exclusivas para empresas com faturamento comprovado.',
      description: 'Apoie o crescimento do seu negócio com crédito para estoque, folha de pagamento ou expansão. Condições exclusivas para MEIs e Empresas.',
      benefits: ['Carência de até 6 meses', 'Taxas pós-fixadas competitivas', 'Limites elevados'],
      requirements: ['CNPJ ativo há mais de 1 ano', 'Faturamento mínimo mensal', 'Sem restrições graves'],
      howItWorks: [
        { number: 1, title: 'Diagnóstico', description: 'Entendemos a saúde financeira do seu negócio.' },
        { number: 2, title: 'Proposta', description: 'Apresentamos as melhores linhas do mercado.' },
        { number: 3, title: 'Liberação', description: 'Crédito em conta PJ.' }
      ],
      faqs: [
        { question: 'MEI pode contratar?', answer: 'Sim, temos linhas específicas para Microempreendedores Individuais.' }
      ],
      ctaText: 'Solicitar crédito PJ',
      icon: 'TrendingUp'
    },
    {
      id: '4',
      slug: 'credito-garantia-imovel',
      title: 'Crédito com Garantia de Imóvel',
      headline: 'Home Equity: As menores taxas do mercado.',
      shortDescription: 'Use seu imóvel como garantia e consiga crédito de alto valor com juros baixos.',
      description: 'O Home Equity é a modalidade mais barata de crédito. Você continua morando ou usando seu imóvel normalmente enquanto paga parcelas suaves.',
      benefits: ['Até 20 anos para pagar', 'Menores juros do Brasil', 'Mantenha a posse do imóvel'],
      requirements: ['Imóvel regularizado', 'Aprovação de crédito', 'Avaliação técnica'],
      howItWorks: [
        { number: 1, title: 'Avaliação', description: 'Avaliamos o valor de mercado do seu bem.' },
        { number: 2, title: 'Jurídico', description: 'Análise da documentação imobiliária.' },
        { number: 3, title: 'Escritura', description: 'Registro da garantia e liberação do recurso.' }
      ],
      faqs: [
        { question: 'O imóvel precisa estar quitado?', answer: 'Na maioria dos casos sim, mas aceitamos intervenientes quitantes.' }
      ],
      ctaText: 'Consultar taxas',
      icon: 'Home'
    },
    {
      id: '5',
      slug: 'antecipacao-recebiveis',
      title: 'Antecipação de Recebíveis e Contratos',
      headline: 'Transforme suas vendas a prazo em dinheiro à vista.',
      shortDescription: 'Receba hoje o que venderia no cartão ou boleto nos próximos meses.',
      description: 'Ideal para lojistas e prestadores de serviço que precisam de liquidez imediata sem gerar dívidas de longo prazo.',
      benefits: ['Liquidez imediata', 'Redução de inadimplência', 'Sem dívidas bancárias'],
      requirements: ['Ter maquininha de cartão ou boletos', 'Volume recorrente de vendas'],
      howItWorks: [
        { number: 1, title: 'Conexão', description: 'Conectamos seu sistema de vendas.' },
        { number: 2, title: 'Seleção', description: 'Você escolhe quais parcelas antecipar.' },
        { number: 3, title: 'Transferência', description: 'Valor disponível na hora.' }
      ],
      faqs: [
        { question: 'Qual a taxa?', answer: 'Varia conforme o prazo e volume de vendas.' }
      ],
      ctaText: 'Quero antecipar vendas',
      icon: 'Banknote'
    },
   {
  id: '6',
  slug: 'desconto-de-cheques-e-duplicatas',
  title: 'Desconto de cheques e duplicatas',
  headline: 'Antecipe seus recebimentos e ganhe fôlego no caixa.',
  shortDescription: 'Transforme cheques e duplicatas a prazo em dinheiro imediato.',
  description: 'O desconto de cheques e duplicatas é uma solução de crédito para empresas que vendem a prazo e precisam de liquidez imediata. Os títulos são antecipados junto à instituição financeira, sem gerar parcelas mensais.',
  benefits: [
    'Liquidez imediata',
    'Não gera endividamento de longo prazo',
    'Ideal para fluxo de caixa',
    'Processo rápido e seguro'
  ],
  requirements: [
    'CNPJ ativo',
    'Cheques ou duplicatas válidas',
    'Análise de crédito do sacado'
  ],
  howItWorks: [
    { number: 1, title: 'Envio dos Títulos', description: 'Você apresenta os cheques ou duplicatas.' },
    { number: 2, title: 'Análise', description: 'O banco avalia os títulos e o sacado.' },
    { number: 3, title: 'Antecipação', description: 'O valor é liberado com desconto da taxa.' }
  ],
  faqs: [
    { question: 'O desconto gera dívida?', answer: 'Não. Trata-se de antecipação de recebíveis, não de empréstimo.' }
  ],
  ctaText: 'Antecipar títulos',
  icon: 'Receipt'
}

  ],
  seo: {
    defaultTitle: 'JCL Consultoria & Negócios | Especialistas em Crédito',
    titleTemplate: '%s | JCL Consultoria',
    defaultDescription: 'Consultoria financeira especializada em antecipação de FGTS, financiamentos, capital de giro e muito mais.',
    siteUrl: 'https://jclconsultoria.com.br',
    ogImage: 'https://jclconsultoria.com.br/og-image.jpg',
    schema: { type: 'FinancialService' },
    pages: {
      home: { title: 'Home', description: 'Soluções de crédito sob medida para você.' },
      sobre: { title: 'Sobre Nós', description: 'Conheça nossa história e valores.' },
      solucoes: { title: 'Soluções', description: 'Veja como podemos ajudar sua vida financeira.' },
      contato: { title: 'Contato', description: 'Fale com um especialista hoje mesmo.' }
    }
  },
  media: {
    images: {
      hero: '/home.jpg',
      about: '/home.jpg'
    }
  }
};
