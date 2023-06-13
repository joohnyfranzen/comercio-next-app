import { Product } from "@/@types/Product";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ZoomHoverImage from "@/components/ZoomHoverImage";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product>();
  useEffect(() => {
    if (id) {
      axios
        .get(`/api/product/${id}`)
        .then((response) => setProduct(response.data));
    }
  }, [id]);

  return (
    <div>
      <Header />
      <section>
        <div className="relative mx-auto max-w-screen-xl px-4 py-8">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
              {product?.images && product.images.length > 0 && (
                <>
                  <ZoomHoverImage
                    alt="Les Paul"
                    src={product?.images[0].imageUrl}
                    className="aspect-square w-full rounded-xl object-cover"
                  />
                  <div className="grid grid-cols-2 gap-4 lg:mt-4">
                    <Image
                      width={200}
                      height={200}
                      alt="Les Paul"
                      src={product?.images[0].imageUrl}
                      className="aspect-square w-full rounded-xl object-cover"
                    />

                    <Image
                      width={200}
                      height={200}
                      alt="Les Paul"
                      src={product?.images[0].imageUrl}
                      className="aspect-square w-full rounded-xl object-cover"
                    />

                    <Image
                      width={200}
                      height={200}
                      alt="Les Paul"
                      src={product?.images[0].imageUrl}
                      className="aspect-square w-full rounded-xl object-cover"
                    />

                    <Image
                      width={200}
                      height={200}
                      alt="Les Paul"
                      src={product?.images[0].imageUrl}
                      className="aspect-square w-full rounded-xl object-cover"
                    />
                  </div>
                </>
              )}
            </div>
            <div className="sticky top-0">
              <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                Pre Order
              </strong>

              <div className="mt-8 flex justify-between">
                <div className="max-w-[35ch] space-y-2">
                  <h1 className="text-xl font-bold sm:text-2xl">
                    {product?.name}
                  </h1>

                  <p className="text-sm">Produto de alta procura</p>

                  <div className="-ml-0.5 flex">
                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-yellow-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>

                    <svg
                      className="h-5 w-5 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <p className="text-lg font-bold">R$ {product?.price},00</p>
              </div>
              <form className="mt-8">
                <div className="mt-8 flex gap-4">
                  <div>
                    <label htmlFor="quantity" className="sr-only">
                      Qty
                    </label>

                    <input
                      type="number"
                      id="quantity"
                      min="1"
                      value={
                        product?.inventory?.stock === null
                          ? "1"
                          : `${product?.inventory?.stock}`
                      }
                      className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
                    />
                  </div>
                  {product && (
                    <Link
                      className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                      target="_blank"
                      href={`https://wa.me/5547996259348?text=Gostaria%20de%20saber%20mais%20sobre%20o%20produto%20${product.name}%20${product.price}.%0D%0A%0D%0Ahttps%3A%2F%2Fwww.moveis-eliane.com%2Fprodutos%2F${product.id}`}
                    >
                      Comprar
                    </Link>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
