import React, { useRef } from "react";
import TestimonialsCard from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

export default function Testimonials() {
  const swiperRef = useRef(null);
  return (
    <section className="bg-gray-200">
      <div className="mx-auto lg:w-3/4 w-full px-16 lg:px-auto py-16 sm:px-6 sm:py-24 lg:mr-0 lg:pl-8 lg:pr-0">
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Veja o comentário de nossos clientes!
            </h2>

            <p className="mt-4 text-gray-500">
              Temos satisfação em atender bem, com qualdiadde e preço justo.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button className="prev-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                <span className="sr-only">Previous Slide</span>
                <svg
                  className="h-5 w-5 -rotate-180 transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>

              <button className="next-button rounded-full border border-pink-600 p-3 text-pink-600 hover:bg-pink-600 hover:text-white">
                <span className="sr-only">Next Slide</span>
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div className="swiper-container !overflow-hidden">
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                modules={[Pagination]}
              >
                <SwiperSlide>
                  <TestimonialsCard
                    name="Anelize Fachim de Barcellos"
                    stars={5}
                    title="Pude comprar por whatsapp e eles entregaram no mesmo dia e fiz o pagamento no local. Amei a agilidade do atendimento."
                    text=""
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialsCard
                    name="Mariza Barros"
                    stars={5}
                    title="Ótimo lugar para quem quer comprar móveis usados com um preço justo e entregas rápidas."
                    text=""
                  />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialsCard
                    name="Jeferson Vargas"
                    stars={5}
                    title="Móveis de primeira e preços ótimos!"
                    text=""
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            className="prev-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
          >
            <svg
              className="h-5 w-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>

          <button
            aria-label="Next slide"
            className="next-button rounded-full border border-pink-600 p-4 text-pink-600 hover:bg-pink-600 hover:text-white"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

{
  /* <link href="https://unpkg.com/swiper/swiper-bundle.min.css" rel="stylesheet" /> */
}
{
  /* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */
}
{
  /* <script>

  document.addEventListener(DOMContentLoaded, function () {
    new Swiper(.swiper-container, {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 32,
      autoplay: {
        delay: 8000,
      },
      breakpoints: {
        640: {
          centeredSlides: true,
          slidesPerView: 1.25,
        },
        1024: {
          centeredSlides: false,
          slidesPerView: 1.5,
        },
      },
      navigation: {
        nextEl: .next-button,
        prevEl: .prev-button,
      },
    })
  })
</script> */
}
