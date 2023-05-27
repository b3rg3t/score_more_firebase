import { FaUsers, FaHome, FaGamepad } from "react-icons/fa";

const navLinks = [
  {
    icon: <FaHome />,
    label: "Home",
    to: "/",
  },
  {
    icon: <FaUsers />,
    label: "Users",
    to: "/users",
  },
  {
    icon: <FaGamepad />,
    label: "Games",
    to: "/games",
  },
];

export { navLinks };
