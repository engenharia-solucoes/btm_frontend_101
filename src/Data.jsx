// Datas
import user from "./assets/user.jpg";

// Photos
import { people01, people02, facebook, instagram, linkedin, twitter, trendmicro, sentinelone, gatinfosec, send, shield, star} from "./assets";

// Icons
import { RxDashboard } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { FiLogOut, FiSettings} from "react-icons/fi";
import { AiFillCloud, AiOutlineSearch } from "react-icons/ai";

// navigation
export const navdatas = [
  {
    id: 1,
    href: '/',
    icon: <RxDashboard />,
    name: "Dashboard",
  },
  {
    id: 2,
    href: '/Registro',
    icon: <FiSettings />,
    name: "Registro",
  },
  {
    id: 3,
    href: '/Pesquisar',
    icon: <AiOutlineSearch />,
    name: "Pesquisar",
  },
  {
    id: 4,
    href: '/Deploy',
    icon: <AiFillCloud />,
    name: "Deploy",
  },
  {
    id: 5,
    href: '/Battousai',
    icon: <TbWorld />,
    name: "Battousai",
  },
  {
    id: 6,
    href: '/Hero',
    icon: <FiLogOut />,
    name: "Hero",
  },
  {
    id: 7,
    href: '/Logout',
    icon: <FiLogOut />,
    name: "Logout",
  },
];

//profile
export const userdata = [
  {
    profile: user,
    name: "Abee Zarar",
    email: "abee2002@gmail.com"
  }
]

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "Recursos",
  },
  {
    id: "product",
    title: "Produto",
  },
  {
    id: "clients",
    title: "Nossos Clientes",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Manter a segurança da informação 24x7 é o novo desafio da área hospitalar. Com a gestão de segurança que a Bidweb nos proporciona, ficamos tranquilos quanto à privacidade e a proteção dos nosso dados.",
    name: "Márcio Moraes",
    title: "IMIP",
    img: people01,
  },
  {
    id: "feedback-2",
    content:
      "Nosso negócio não para, trabalhamos 24x7. Por isso estamos acompanhados de empresas que nos dão respostas rápidas e precisas a incidentes, como a Bidweb na área de segurança da informação.",
    name: "André Vilas Boas",
    title: "Grupo Dislub Equador",
    img: people02,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Usuários Ativos",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Empresas parceiras",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Logs tratados",
    value: "230M+",
  },
];

export const footerLinks = [
  {
    title: "Empresa",
    links: [
      {
        name: "Política de Privacidade",
        link: "https://privacy-central.securiti.ai/#/notices/a4d739b4-cdd3-443d-98e6-950a6f99ae20",
      },
      {
        name: "Código de Ética e conduta",
        link: "https://www.bidweb.com.br/pt/codigo-de-etica-e-conduta",
      },
      {
        name: "Canal de Denúncia",
        link: "https://denuncias.umaempresaetica.com.br/",
      },
      {
        name: "Portal da Privacidade",
        link: "https://privacy-central.securiti.ai/#/dsr/efbb2fe0-0a33-49b6-84ae-eac49a96facd",
      },
    ],
  },
  {
    title: "Links Úteis",
    links: [
      {
        name: "Suporte",
        link: "#",
      },
      {
        name: "API",
        link: "#",
      },
      {
        name: "Documentação",
        link: "#",
      },
    ],
  },
  {
    title: "Contato",
    links: [
      {
        name: "Entrar em contato",
        link: "mailto:contato@bidweb.com.br",
      },
      {
        name: "Trabalhe conosco",
        link: "https://bidweb.solides.jobs/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/bidwebsit/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/bidwebsit",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/bidweb-security-it",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: trendmicro,
  },
  {
    id: "client-2",
    logo: gatinfosec,
  },
  {
    id: "client-3",
    logo: sentinelone,
  },
];