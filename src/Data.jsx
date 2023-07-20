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
    href: '/Logout',
    icon: <FiLogOut />,
    name: "Logout",
  }
];

//profile
export const userdata = [
  {
    profile: user,
    name: "Abee Zarar",
    email: "abee2002@gmail.com"
  }
]

// Landing Page - Navbar

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

// Landing Page - Features

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Economia",
    content:
      "Garanta um ambiente confiável e o correto tratamento dos seus dados, evitando perdas financeiras.",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "Segurança",
    content:
      "Tomamos medidas protetivas para garantir que suas informações estejam seguras.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Prevenção",
    content:
      "Invista em ações preventivas para evitar ataques e analisar os logs gerados pelas suas ferramentas. ",
  },
];

// Landing Page - Feedback

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

// Landing Page - Stats

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

// Landing Page - Footer Links

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

// Landing Page - SocialMedia

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

// Landing Page - Clients

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

// Cards

export const cardsData = [

  // Registro

  {
    id: '1',
    path: 'registro',
    image: user,
    name: 'Novo Usuário',
    category: 'Usuário',
    description:'',
    href: '',
  },
  {
    id: '2',
    path: 'registro',
    image: user,
    name: 'API',
    category: 'Produto',
    description:'',
    href: '',
  },
  {
    id: '3',
    path: 'registro',
    image: user,
    name: 'Logstash',
    category: 'Produto',
    description:'',
    href: '',
  },
  {
    id: '4',
    path: 'registro',
    image: user,
    name: 'Novo Fornecedor',
    category: 'Fornecedor',
    description:'',
    href: '',
  },
  {
    id: '5',
    path: 'registro',
    image: user,
    name: 'Nova Pipeline',
    category: 'Pipeline',
    description:'',
    href: '',
  },

  // Registro - Pesquisar

  {
    id: '6',
    path: 'pesquisar',
    image: user,
    name: 'Usuário',
    category: '',
    description:'',
    href: '',
  },
  {
    id: '7',
    path: 'pesquisar',
    image: user,
    name: 'Produto',
    category: '',
    description:'',
    href: '',
  },
  {
    id: '8',
    path: 'pesquisar',
    image: user,
    name: 'Fornecedor',
    category: '',
    description:'',
    href: '',
  },

  // Deploy

  {
    id: '9',
    path: 'deploy',
    image: user,
    name: 'Checar Status',
    category: '',
    description:'',
    href: '',
  },
  {
    id: '10',
    path: 'deploy',
    image: user,
    name: 'Novo Deploy',
    category: '',
    description:'',
    href: '',
  },

  // Battousai

  {
    id: '11',
    path: 'battousai',
    image: user,
    name: 'Nova Role',
    category: '',
    description:'',
    href: '',
  },
  {
    id: '12',
    path: 'battousai',
    image: user,
    name: 'Novo Usuário Battousai',
    category: '',
    description:'',
    href: '',
  },
];

// Cards
export const cardsNav = [
  {
    name: 'all',
  },
  {
    name: 'Usuário',
  },
  {
    name: 'Produto',
  },
  {
    name: 'Fornecedor',
  },
  {
    name: 'Pipeline',
  },
];