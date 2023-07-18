// Datas
import user from "./assets/user.jpg";

// Photos
import { people01, people02, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "./assets";

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
    title: "Links seguros",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Parceiros",
    links: [
      {
        name: "Nossos parceiros",
        link: "#",
      },
      {
        name: "Entrar em contato",
        link: "#",
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
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];