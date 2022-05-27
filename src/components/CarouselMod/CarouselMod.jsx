import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel } from "antd";

import style from "./CarouselMod.module.scss";

const CarouselMod = (props) => {
  const { children, ...args } = props;
  return (
    <Carousel
      {...args}
      arrows
      prevArrow={<LeftOutlined className="arrow" id="prevArrow" />}
      nextArrow={<RightOutlined className="arrow" id="nextArrow" />}
      className={style.carousel}
    >
      {children}
    </Carousel>
  );
};

export default CarouselMod;
