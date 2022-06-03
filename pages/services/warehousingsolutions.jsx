import ServiceCard from "src/components/ServiceCard";

const warehousingsolutions = (props) => {
  const { services } = props;
  return <ServiceCard services={services.WAREHOUSE_SOLUTIONS} />;
};

export default warehousingsolutions;
