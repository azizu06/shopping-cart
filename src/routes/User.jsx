import { useParams, Link } from "react-router-dom";
import { USERS } from "../userIDs";
import { DefaultProfile } from "./miniRoutes";

const userCard = (user) => {
  return (
    <>
      <p>{user.name}</p>
      <Link to="/">Click to see go back to home</Link>
    </>
  );
};

export const User = () => {
  const { id } = useParams();
  const user = USERS.find((u) => u.id === id);
  return (
    <div>
      <ul>
        {USERS.map((u, i) => (
          <li key={i}>
            <Link to={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
      {user ? userCard(user) : <DefaultProfile />}
    </div>
  );
};
