import { Link } from "react-router-dom";

export const About = () => {
  return (
    <>
      <p>This is the about page!</p>
      <Link to="/">Click to go back to home page</Link>
    </>
  );
};

export const Popeye = () => {
  return (
    <>
      <p>Hi, I am Popeye! I love to eat Spinach!</p>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export const Settings = () => {
  return (
    <>
      <p>Settings page of the dashboard</p>
      <Link to="/dashboard">Click to go back to dashboard</Link>
    </>
  );
};

export const Spinach = () => {
  return (
    <>
      <p>Hi, I am Spinach! Popeye loves to eat me!</p>
      <Link to="/">Click here to go back</Link>
    </>
  );
};

export const Stats = () => {
  return (
    <>
      <p>Stats page of the dashboard</p>
      <Link to="/dashboard">Click to go back to dashboard</Link>
    </>
  );
};

export const Contact = () => {
  return (
    <>
      <p>This is the contact page!</p>
      <Link to="/">Click to go back to home page</Link>
    </>
  );
};

export const DefaultProfile = () => {
  return <p>Oh, nothing to see here!</p>;
};

export const ErrorPage = () => {
  return (
    <div>
      <h1>Oh no, this route doesn't exist!</h1>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </div>
  );
};
