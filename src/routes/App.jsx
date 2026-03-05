import { Link } from "react-router-dom";
import routes from "../routes";

const App = () => {
  const navRoutes = routes.filter((r) => r.navLabel && r.path !== "/");

  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
          {navRoutes.map((routes, idx) => (
            <li key={idx}>
              <Link to={routes.path}>{routes.navLabel}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default App;
