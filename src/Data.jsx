// Datas
import user from "./assets/user.jpg";

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