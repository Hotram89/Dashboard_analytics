import Home from "pages/Home/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
    exact: true,
  },
  {
    path: "/user/:id",
    element: <Home />,
    exact: true,
  },
];

export default routes;
