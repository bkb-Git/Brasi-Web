import ServiceCard from "src/components/ServiceCard";

const clearingandforwarding = (props) => {
  const { services } = props;
  return <ServiceCard services={services.CLEARING_AND_LOGISTICS} />;
};

export default clearingandforwarding;
