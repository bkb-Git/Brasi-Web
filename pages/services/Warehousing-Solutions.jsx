import ServiceCard from "src/components/ServiceCard";

const warehousing = (props) => {
  const { services } = props;
  return <ServiceCard services={services.WAREHOUSE_SOLUTIONS} />;
};

export default warehousing;
