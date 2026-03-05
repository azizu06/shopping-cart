import { useParams, useNavigate } from "react-router";
import { DefaultProfile, Spinach, Popeye } from "./miniRoutes";

const Profile = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Hello from profile page!</h1>
      <p>So, how are you?</p>
      <hr />
      <h2>The profile visited is here:</h2>
      {name === "popeye" ? (
        <Popeye />
      ) : name === "spinach" ? (
        <Spinach />
      ) : (
        <DefaultProfile />
      )}
      <button onClick={() => navigate("/profile/spinach")}>
        Click to see spinach
      </button>
      <button onClick={() => navigate("/profile/popeye")}>
        Click to see popeye
      </button>
    </div>
  );
};

export default Profile;
