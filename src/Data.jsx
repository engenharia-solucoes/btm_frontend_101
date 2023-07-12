// Datas
import user from "./assets/user.jpg";

// Icons
import { RxDashboard } from "react-icons/rx";
import { TbWorld } from "react-icons/tb";
import { FiLogOut, FiSettings} from "react-icons/fi";
import { AiFillCloud, AiOutlineSearch } from "react-icons/ai";

export const navdatas = [
  {
    id: 1,
    icon: <RxDashboard />,
    text: "Dashboard",
  },
  {
    id: 2,
    icon: <FiSettings />,
    text: "Registro",
  },
  {
    id: 3,
    icon: <AiOutlineSearch />,
    text: "Pesquisar",
  },
  {
    id: 4,
    icon: <AiFillCloud />,
    text: "Deploy",
  },
  {
    id: 5,
    icon: <TbWorld />,
    text: "Battousai",
  },
  {
    id: 6,
    icon: <FiLogOut />,
    text: "Logout",
  },
];

export const userdata = [
  {
    profile: user,
    name: "Abee Zarar",
    email: "abee2002@gmail.com"
  }
]