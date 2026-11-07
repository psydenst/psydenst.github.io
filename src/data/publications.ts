// Nym publications by psydenst. Outbound links only: titles, dates and original
// one-line teasers. Do NOT store article bodies here.
// Every piece exists on Nym in English and Portuguese; the UI picks the matching one.
import type { Lang } from '../i18n/ui';

type Localized = Record<Lang, string>;

export interface Publication {
  date: string; // YYYY-MM-DD
  mins: number;
  title: Localized;
  url: Localized;
  teaser: Localized;
}

const list: Publication[] = [
  {
    date: '2026-01-12',
    mins: 6,
    title: { en: 'How to use Tails OS: Nym’s cybersecurity guide', pt: 'Como usar o Tails OS: Guia de cibersegurança da Nym' },
    url: { en: 'https://nym.com/blog/tails-os', pt: 'https://nym.com/pt/blog/tails-os' },
    teaser: {
      en: 'A guide to getting started with Tails OS, focused on cybersecurity.',
      pt: 'Um guia para começar com o Tails OS, com foco em cibersegurança.',
    },
  },
  {
    date: '2025-11-20',
    mins: 10,
    title: { en: 'What is a man-in-the-middle (MITM) cyberattack?', pt: 'O que é um ciberataque man-in-the-middle (MITM)?' },
    url: { en: 'https://nym.com/blog/what-is-man-in-the-middle', pt: 'https://nym.com/pt/blog/what-is-man-in-the-middle' },
    teaser: {
      en: 'An explainer on the man-in-the-middle attack.',
      pt: 'Uma explicação sobre o ataque man-in-the-middle.',
    },
  },
  {
    date: '2025-09-24',
    mins: 9,
    title: { en: 'What is packet sniffing?', pt: 'O que é sniffing de pacotes?' },
    url: { en: 'https://nym.com/blog/what-is-packet-sniffing', pt: 'https://nym.com/pt/blog/que-is-sniffing' },
    teaser: {
      en: 'What sniffing packets on a network means, from the ground up.',
      pt: 'O que significa farejar pacotes em uma rede, desde o começo.',
    },
  },
  {
    date: '2025-09-01',
    mins: 6,
    title: { en: 'What is a Denial-of-Service (DoS) attack?', pt: 'O que é um ataque de Negação de Serviço (DoS)?' },
    url: { en: 'https://nym.com/blog/denial-of-service-attacks', pt: 'https://nym.com/pt/blog/negativo-de-ataque' },
    teaser: {
      en: 'An introduction to denial-of-service attacks.',
      pt: 'Uma introdução aos ataques de negação de serviço.',
    },
  },
  {
    date: '2025-08-08',
    mins: 5,
    title: { en: 'What is Monero (XMR)?', pt: 'O que é Monero (XMR)?' },
    url: { en: 'https://nym.com/blog/what-is-monero', pt: 'https://nym.com/pt/blog/what-is-monero' },
    teaser: {
      en: 'An introduction to Monero, the XMR cryptocurrency.',
      pt: 'Uma introdução ao Monero, a criptomoeda XMR.',
    },
  },
  {
    date: '2025-08-03',
    mins: 3,
    title: { en: 'What is Litecoin (LTC)? The Bitcoin alternative', pt: 'O que é Litecoin (LTC)? A alternativa ao Bitcoin' },
    url: { en: 'https://nym.com/blog/what-is-litecoin-ltc', pt: 'https://nym.com/pt/blog/what-is-litecoin-ltc' },
    teaser: {
      en: 'Litecoin presented as an alternative to Bitcoin.',
      pt: 'A Litecoin apresentada como alternativa ao Bitcoin.',
    },
  },
  {
    date: '2025-08-01',
    mins: 7,
    title: { en: 'What is China’s Great Firewall?', pt: 'O que é o Grande Firewall da China?' },
    url: { en: 'https://nym.com/blog/what-is-great-firewall-of-china', pt: 'https://nym.com/pt/blog/what-is-great-firewall-of-china' },
    teaser: {
      en: 'A look at the Great Firewall of China.',
      pt: 'Um olhar sobre o Grande Firewall da China.',
    },
  },
  {
    date: '2025-06-27',
    mins: 7,
    title: { en: 'What is decentralization?', pt: 'O que é descentralização?' },
    url: { en: 'https://nym.com/blog/what-is-decentralization', pt: 'https://nym.com/pt/blog/what-is-descentralização' },
    teaser: {
      en: 'The concept of decentralization, explained.',
      pt: 'O conceito de descentralização, explicado.',
    },
  },
  {
    date: '2025-06-13',
    mins: 8,
    title: { en: 'Why did we inherit a surveilled internet?', pt: 'Por que herdamos uma internet vigiada?' },
    url: { en: 'https://nym.com/blog/the-surveilled-internet', pt: 'https://nym.com/pt/blog/internet-de_vigilância' },
    teaser: {
      en: 'A question about how we ended up with a surveillance internet.',
      pt: 'Uma pergunta sobre como acabamos com uma internet de vigilância.',
    },
  },
  {
    date: '2024-09-11',
    mins: 8,
    title: {
      en: 'Nym Squad speaks out: TupiNymQuim on the ground in Brazil',
      pt: 'Os esquadrões da Nym se manifestam: TupiNymQuim em campo no Brasil',
    },
    url: {
      en: 'https://nym.com/blog/nym-squads-speak-out-tupinymquim-on-the-ground-in-brazil',
      pt: 'https://nym.com/pt/blog/os-esquadrões-da-nym-se-manifestam-tupinymquim-em-campo-no-brasil',
    },
    teaser: {
      en: "The TupiNymQuim squad and Nym's work in Brazil.",
      pt: 'O squad TupiNymQuim e o trabalho da Nym no Brasil.',
    },
  },
];

export const publications = [...list].sort((a, b) => b.date.localeCompare(a.date));
