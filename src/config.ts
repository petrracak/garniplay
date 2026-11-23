// Links e dados que mudam com frequência ficam aqui, num lugar só.

/** Link do checkout do Garniplay (Hotmart). */
export const CHECKOUT_URL = 'https://pay.hotmart.com/R107667485H?off=1vl8db0a';

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

/**
 * Upsell do IPS (página /ips, exibida pela Hotmart depois da compra do Garniplay).
 * A compra e a recusa acontecem no widget "Sales Funnel" da Hotmart; os destinos de cada
 * botão (ex.: /obrigado?upsell=aceito e /obrigado) são configurados no funil da Hotmart.
 */
export const UPSELL = {
  installments: '12x de R$ 52,50',
  cash: 'R$ 597 à vista',
};

/** Página de obrigado (/obrigado). Com ?upsell=aceito mostra a versão Garniplay + IPS. */
export const THANKS = {
  /** Área de membros da Hotmart */
  membersUrl: 'https://hotmart.com/pt-br/club/fernanda-garnizet',
  /** E-mail e prazo de resposta da equipe (aparecem no card de suporte) */
  supportEmail: 'suporte@fernandagarnizet.com.br',
  responseTime: 'em até 48 h (dias úteis)',
  /** WhatsApp no formato internacional, só números (ex.: 5511999999999). Vazio = botão escondido. */
  whatsapp: '',
};

/**
 * Vídeos de vendas (VTurb). As seções abaixo do vídeo ficam escondidas e aparecem no pitch,
 * pelo recurso de delay da VTurb (displayHiddenElements, com persist: quem volta vê tudo).
 * revealAt = minutos × 60 + segundos.
 */
export const VSL = {
  account: 'c3613d84-012e-4cdb-8ad4-dfa58be08838',
  garniplay: { player: '6ae8a2a3f2699dc279d256e5', media: '6ae8a156c7321bec2b426f6f', revealAt: 13 * 60 + 56 },
  ips: { player: '6af30f630b42ce3fc9fc9ef2', media: '6af30d3bd74a4698ad55905e', revealAt: 8 * 60 + 35 },
};
