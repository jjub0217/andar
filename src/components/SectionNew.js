import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import ProductList from "./ProductList";

const SectionNew = ({ title, products, className}) => {
  return (
    <section className="section_new">
      <h2 className="headline">{title}</h2>
      <ProductList data={products} className="product_" />
    </section>
  );
};

export default SectionNew;
