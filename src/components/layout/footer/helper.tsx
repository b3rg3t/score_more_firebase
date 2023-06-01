import { FaGamepad, FaHome, FaTrophy, FaUsers } from "react-icons/fa";

const footerLinks = [
  {
    icon: <FaHome />,
    label: "Home",
    to: "/",
  },
  {
    icon: <FaGamepad />,
    label: "Games",
    to: "/games",
  },
  {
    icon: <FaUsers />,
    label: "Users",
    to: "/users",
  },
  {
    icon: <FaTrophy />,
    label: "Leaderboard",
    to: "/leaderboard",
  },
];

export { footerLinks };
