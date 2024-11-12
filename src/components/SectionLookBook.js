import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import ContentLookBook from "./ContentLookBook"; 

const SectionLookBook = ({ title, lookBookData }) => {
  return (
    <section className="section_lookBook">
      <h2 className="headline">{title}</h2>
      {lookBookData.map((data, index) => (
        <ContentLookBook key={index} data={data} />
      ))}
    </section>
  );
};

export default SectionLookBook;
