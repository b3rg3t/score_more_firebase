import Root, { loader as rootLoader } from "../pages/Root";

import UserListPage from "../pages/users/UserListPage";
import UserPage from "../pages/users/UserPage";
import EditUserPage from "../pages/users/EditUserPage";
import ErrorPage from "../pages/ErrorPage";
import CreateUserPage from "../pages/users/CreateUserPage";
import Home from "../components/home/Home";
import GamePage from "../pages/games/GamePage";
import FormNewGame from "../components/games/forms/FormNewGame";

const ROUTES: any = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
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
        path: "/games",
        children: [
          {
            index: true,
            element: <GamePage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "create-game",
            element: <FormNewGame />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
];

export { ROUTES };
