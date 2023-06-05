import React, { useEffect, useState } from "react";
import { SmallProduct } from "../Product";
import { Text } from "@chakra-ui/react";
import { ScrollProductsProps } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

export default function ScroolProducts({
  products,
  title,
}: ScrollProductsProps) {
  const [perView, setPerView] = useState(5);

  const getQuantityPerView = () => {
    if (window.innerWidth < 640) {
      return 1;
    } else if (window.innerWidth < 768) {
      return 2;
    } else if (window.innerWidth < 1024) {
      return 3;
    } else if (window.innerWidth < 1280) {
      return 4;
    } else {
      return 5;
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setPerView(getQuantityPerView());
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Text
        fontSize="2xl"
        fontWeight="medium"
        textAlign="left"
        className="mb-6"
      >
        {title}
      </Text>
      <Swiper
        className="w-full h-full"
        slidesPerView={perView}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation]}
        style={{
          scrollSnapType: "x mandatory",
        }}
      >
        {products.map((product, i) => (
          <SwiperSlide key={product.id} className="h-full">
            <SmallProduct product={product} i={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
