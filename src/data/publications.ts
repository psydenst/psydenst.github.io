// Nym publications by psydenst. Outbound links only: titles, dates and original
// one-line teasers written from the titles. Do NOT store article bodies here.
export interface Publication {
  title: string;
  date: string; // YYYY-MM-DD
  url: string;
  lang?: 'pt' | 'en';
  teaser: string;
}

const list: Publication[] = [
  { date: '2026-01-12', lang: 'pt', title: 'Como usar o Tails OS: Guia de cibersegurança da Nym', url: 'https://nym.com/pt/blog/tails-os', teaser: "A guide to getting started with Tails OS, focused on cybersecurity." },
  { date: '2025-11-20', lang: 'en', title: 'What is a man-in-the-middle (MITM) cyberattack?', url: 'https://nym.com/pt/blog/what-is-man-in-the-middle', teaser: "An explainer on the man-in-the-middle attack." },
  { date: '2025-09-24', lang: 'pt', title: 'O que é sniffing de pacotes?', url: 'https://nym.com/pt/blog/que-is-sniffing', teaser: "What sniffing packets on a network means, from the ground up." },
  { date: '2025-09-01', lang: 'pt', title: 'O que é um ataque de Negação de Serviço (DoS)?', url: 'https://nym.com/pt/blog/negativo-de-ataque', teaser: "An introduction to denial-of-service attacks." },
  { date: '2025-08-08', lang: 'pt', title: 'O que é Monero (XMR)?', url: 'https://nym.com/pt/blog/what-is-monero', teaser: "An introduction to Monero, the XMR cryptocurrency." },
  { date: '2025-08-03', lang: 'pt', title: 'O que é Litecoin (LTC)? A alternativa ao Bitcoin', url: 'https://nym.com/pt/blog/what-is-litecoin-ltc', teaser: "Litecoin presented as an alternative to Bitcoin." },
  { date: '2025-08-01', lang: 'pt', title: 'O que é o Grande Firewall da China?', url: 'https://nym.com/pt/blog/what-is-great-firewall-of-china', teaser: "A look at the Great Firewall of China." },
  { date: '2025-06-27', lang: 'pt', title: 'O que é descentralização?', url: 'https://nym.com/pt/blog/what-is-descentralização', teaser: "The concept of decentralization, explained." },
  { date: '2025-06-13', lang: 'pt', title: 'Por que herdamos uma internet vigiada?', url: 'https://nym.com/pt/blog/internet-de_vigilância', teaser: "A question about how we ended up with a surveillance internet." },
  { date: '2024-09-11', lang: 'pt', title: 'Os esquadrões da Nym se manifestam: TupiNymQuim em campo no Brasil', url: 'https://nym.com/pt/blog/os-esquadrões-da-nym-se-manifestam-tupinymquim-em-campo-no-brasil', teaser: "The TupiNymQuim squad and Nym's work in Brazil." },
];

export const publications = [...list].sort((a, b) => b.date.localeCompare(a.date));
