import { useSelector } from "react-redux";

const Home = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <div>
      <h1>{token ? "Login Successful" : "Please Log In"}</h1>
    </div>
  );
};

export default Home;
