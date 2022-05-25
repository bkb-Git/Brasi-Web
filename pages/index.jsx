import Home from "../src/views/Home";

const HomePage = (props) => {
  const { services } = props;
  return <Home services={services} />;
};

export default HomePage;
