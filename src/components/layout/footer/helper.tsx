import { FaGamepad, FaHome, FaTrophy, FaUsers,  } from "react-icons/fa";

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
  // {
  //   icon: (
  //     <div
  //       className="border rounded-circle p-1 mt-1 box-shadow d-flex"
  //       style={{ width: 30, height: 30 }}
  //     >
  //       <FaPlus size={20} />
  //     </div>
  //   ),
  //   label: "",
  //   to: "/games/create-game",
  // },
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
