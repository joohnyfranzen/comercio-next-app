import { Product } from "@/@types/Product";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { AutoComplete } from "antd";

export default function Carrousel() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const submitForm = () => {
      axios.get("/api/product").then((response) => setProducts(response.data));
    };
    if (products.length === 0) {
      submitForm();
    }
  }, []);

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const renderData = useMemo(() => {
    return products.filter(({ name }) => {
      if (search === null || search.trim() === "") {
        return name?.toLowerCase().includes(search.toLowerCase());
      }
    });
  }, [products, search]);

  return (
    <div className="h-screen w-screen bg-green-200 overflow-x-hidden p-10">
      <div className="pb-16">
        <h1 className="py-5 text-5xl font-light text-gray-800">
          Nossos produtos
        </h1>
        <AutoComplete
          className="w-full mx-auto"
          placeholder="Pesquisar"
          size="large"
          onSearch={(value) => handleSearch(value)}
          onChange={(value) => handleSearch(value)}
          options={
            products?.map((product) => {
              return {
                value: product.name,
                label: product.name,
              };
            }) || []
          }
          filterOption={(inputValue, option) =>
            String(option?.value)
              .toUpperCase()
              .indexOf(inputValue.toUpperCase()) !== -1
          }
        />
      </div>
      <div className="mx-auto h-full">
        <Swiper
          className=" h-full select-none"
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={2}
          loop={renderData.length > 3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 1200, disableOnInteraction: false }}
          mousewheel
        >
          {renderData?.map((product, i) => {
            return product.images && product.images.length > 0 ? (
              <SwiperSlide key={i}>
                <div className="w-full h-full flex flex-col justify-between rounded-2xl">
                  <h2 className="z-10 relative w-full text-center text-xl font-semibold rounded-md p-2 text-white bg-black/30">
                    {product.name}
                    <p>{product.state}</p>
                  </h2>

                  <div className="bg-gradient from-green-400 to-blue-500 flex-1 absolute w-full h-full ">
                    <Image
                      src={String(product.images[0].imageUrl)}
                      fill
                      className="object-cover object-center bg-gradient-to-r rounded-2xl filter brightness-105 contrast-125"
                      alt="alt"
                    />
                  </div>
                  <div className="z-10 relative w-full flex justify-center p-4">
                    <div
                      className="rounded-lg pl-2 pr-8 py-5 transform -rotate-3 text-gray-800 bg-center bg-contain bg-no-repeat"
                      style={{
                        backgroundImage: "url(/SVG/Ticket.svg)",
                      }}
                    >
                      <span className="text-3xl mr-1">R$</span>
                      <span className="text-5xl font-bold">
                        {product.price},00
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ) : (
              <>Vazio</>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
