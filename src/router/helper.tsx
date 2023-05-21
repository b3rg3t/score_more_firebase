import Root, { loader as rootLoader } from "./Root";

import UserListPage from "../pages/users/UsersPage";
import UserPage from "../pages/users/UserPage";
import EditUserPage from "../pages/users/EditUserPage";
import ErrorPage from "../pages/ErrorPage";
import CreateUserPage from "../pages/users/CreateUserPage";
import Home from "../components/home/Home";

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
    ],
  },
];

export { ROUTES };
