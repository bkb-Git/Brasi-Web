import ServiceCard from "src/components/ServiceCard";

const ClearingAndForwarding = (props) => {
  const { services } = props;
  return <ServiceCard services={services.CLEARING_AND_LOGISTICS} />;
};

export default ClearingAndForwarding;
