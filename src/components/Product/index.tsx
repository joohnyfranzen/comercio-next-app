import { Product as ProductType } from "../../@types/Product";
import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Tag } from "@chakra-ui/react";
import React, { useMemo } from "react";
import Image from "next/image";
const colors = ["bg-green-100", "bg-red-100"];

export default function Product({ product }: { product: ProductType }) {
  return (
    <a key={product.id} href={"/produtos/" + product.id} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        {product.images && product.images.length > 0 ? (
          <Image
            src={product.images[0].imageUrl}
            alt={product.name + " image"}
            fill
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        ) : (
          <div className="h-full w-full" /> // Renderiza um espaço em branco se não houver imagens
        )}
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </a>
  );
}

export function SmallProduct({
  product,
  i,
}: {
  product: ProductType;
  i: number;
}) {
  const currentColor = colors[i % colors.length];

  // const tag = useMemo(() => {
  //   if (product.tags && product.tags?.length > 0) {
  //     const firstTag = product.tags[0];
  //     return firstTag;
  //   }
  // }, [product.tags]);

  const discountPercent = product.discount
    ? (product.price * 100) / product.discount
    : 0;

  return (
    <a
      key={product.id}
      href={"/produtos/" + product.id}
      className="group relative flex flex-col justify-between h-full"
    >
      <div>
        <div className="absolute top-0 left-0 z-10">
          <Tag size="sm" colorScheme="green">
            {100 - discountPercent}% OFF
          </Tag>
          {/* {product.discount && (
          )}
          {tag && (
            <Tag size="sm" colorScheme="red">
              {tag}
            </Tag>
          )} */}
        </div>
        <div className="w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-3 xl:aspect-w-7">
          {product.images && product.images.length > 0 ? (
            <Image
              fill
              src={product.images[0].imageUrl}
              alt={product.name + " image"}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          ) : (
            <div className="h-full w-full" />
          )}
        </div>
        <h3 className="mt-4 text-xl font-semibold text-gray-700">
          {product.name}
        </h3>
      </div>
      <div className="flex justify-between items-end w-full mt-8">
        <PriceSmallItem product={product} />
        <Button colorScheme="green" className={currentColor}>
          <ShoppingOutlined />
          <span className="">Adicionar</span>
        </Button>
      </div>
    </a>
  );
}

export function PriceSmallItem({ product }: { product: ProductType }) {
  if (product.discount) {
    return (
      <div className="flex flex-col">
        <p className="mt-1 text-lg font-medium text-gray-900 line-through">
          R$ {product.discount},00
        </p>
        <p className="mt-1 text-lg font-medium text-green-900">
          R$ {product.price},00
        </p>
      </div>
    );
  }
  return (
    <p className="mt-1 text-lg font-medium text-gray-900">R${product.price}</p>
  );
}
