import Root, { loader as rootLoader } from "../pages/Root";

import UserListPage from "../pages/users/UserListPage";
import UserPage from "../pages/users/UserPage";
import EditUserPage from "../pages/users/EditUserPage";
import ErrorPage from "../pages/ErrorPage";
import CreateUserPage from "../pages/users/CreateUserPage";
import GameListPage from "../pages/games/GameListPage";
import HomePage from "../pages/HomePage";
import GameFormPage from "../pages/games/GameFormPage";
import EditMobxUser from "../pages/users/EditMobxUser";
import GameActivePage from "../pages/games/GameActivePage";

const ROUTES: any = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/users",
        children: [
          {
            index: true,
            element: <UserListPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "create-user",
            element: <CreateUserPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "user/:userId",
            element: <UserPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "user/:userId/edit",
            element: <EditUserPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/leaderboard",
        children: [
          {
            index: true,
            element: <UserListPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/edit",
        children: [
          {
            index: true,
            element: <EditMobxUser />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/games",
        children: [
          {
            index: true,
            element: <GameListPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "game/:gameId",
            element: <GameActivePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "create-game",
            element: <GameFormPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
];

export { ROUTES };
