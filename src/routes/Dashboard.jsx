import { Outlet, Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <p>This is the dashboard page</p>
      <Link to="stats">Stats section</Link>
      <br />
      <Link to="settings">Settings section</Link>
      <br />
      <Link to="/">Home Page</Link>
      <Outlet />
    </>
  );
};

export default Dashboard;
