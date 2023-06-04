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
    exact: true,
    loader: rootLoader,
    children: [
      {
        index: true,
        exact: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/users",
        exact: true,
        children: [
          {
            index: true,
            exact: true,
            element: <UserListPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "create-user",
            exact: true,
            element: <CreateUserPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "user/:userId",
            exact: true,
            element: <UserPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "user/:userId/edit",
            exact: true,
            element: <EditUserPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/leaderboard",
        exact: true,
        children: [
          {
            index: true,
            exact: true,
            element: <UserListPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/edit",
        exact: true,
        children: [
          {
            index: true,
            exact: true,
            element: <EditMobxUser />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "/games",
        exact: true,
        children: [
          {
            index: true,
            exact: true,
            element: <GameListPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "create-game",
            exact: true,
            element: <GameFormPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "game/:gameId",
            exact: true,
            element: <GameActivePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "game/:gameId/:roundId",
            exact: true,
            element: <GameActivePage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
];

export { ROUTES };
