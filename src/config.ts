// Links e dados que mudam com frequência ficam aqui, num lugar só.

/** Link do checkout (Hotmart). Enquanto for '#', os botões não navegam. */
export const CHECKOUT_URL = '#';

export const SITE = {
  title: 'Garniplay | Atividades psicopedagógicas com direção',
  description:
    'Atividades psicopedagógicas organizadas por habilidades e competências para planejar sessões com mais clareza, variedade e intencionalidade.',
  author: 'Fernanda Garnizet',
};

export const LEGAL = {
  terms: '#',
  privacy: '#',
  support: '#',
};

/** Upsell do IPS (página /ips, exibida pela Hotmart depois da compra do Garniplay). */
export const UPSELL = {
  /** Link/one-click da Hotmart para incluir o IPS. Enquanto for '#', o botão não navega. */
  oneClickUrl: '#',
  /** Para onde vai quem recusa (página de obrigado). */
  declineUrl: '/obrigado?upsell=recusado',
  installments: '12x de R$ 52,50',
  cash: 'R$ 597 à vista',
};

/** Página de obrigado (/obrigado). Com ?upsell=aceito mostra a versão Garniplay + IPS. */
export const THANKS = {
  /** Área de membros da Hotmart */
  membersUrl: 'https://consumer.hotmart.com/',
  /** E-mail e prazo de resposta da equipe (aparecem no card de suporte) */
  supportEmail: '[CONFIRMAR E-MAIL]',
  responseTime: '[CONFIRMAR]',
  /** WhatsApp no formato internacional, só números (ex.: 5511999999999). Vazio = botão escondido. */
  whatsapp: '',
};
