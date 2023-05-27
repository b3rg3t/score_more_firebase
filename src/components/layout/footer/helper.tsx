import { FaGamepad, FaHome, FaTrophy } from "react-icons/fa";

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
    icon: <FaTrophy />,
    label: "Leaderboard",
    to: "/leaderboard",
  },
];

export { footerLinks };
