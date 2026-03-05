import App from "./routes/App";
import Profile from "./routes/Profile";
import Dashboard from "./routes/Dashboard";
import { User } from "./routes/User";
import {
  ErrorPage,
  About,
  Contact,
  Stats,
  Settings,
  DefaultProfile,
} from "./routes/miniRoutes";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "profile/:name",
    element: <Profile />,
    navLabel: "My Profile",
  },
  {
    path: "about",
    element: <About />,
    navLabel: "About page",
  },
  {
    path: "contact",
    element: <Contact />,
    navLabel: "Contact page",
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    navLabel: "Dashboard page",
    children: [
      {
        index: true,
        element: <DefaultProfile />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "users/:id",
    element: <User />,
    navLabel: "Users",
  },
];

export default routes;
