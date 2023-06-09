import { Product as ProductType } from "../../@types/Product";
import { ShoppingOutlined } from "@ant-design/icons";
import { Button, Tag } from "@chakra-ui/react";
import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
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

  const hasImages = useMemo(() => {
    return product.images && product.images.length > 0;
  }, [product.images]);

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
          {discountPercent > 0 && (
            <Tag size="sm" colorScheme="green">
              {100 - discountPercent}% OFF
            </Tag>
          )}
          {/* {product.discount && (
          )}
          {tag && (
            <Tag size="sm" colorScheme="red">
              {tag}
            </Tag>
          )} */}
        </div>
        <Image
          src={`${
            hasImages ? product?.images?.[0].imageUrl : "/SVG/furniture.svg"
          }`}
          alt={product.name + " image"}
          width={200}
          height={200}
          style={{
            opacity: hasImages ? 1 : 0.5,
          }}
          className="h-[200px] w-[200px] object-cover object-center group-hover:opacity-75"
        />
        <h3 className="mt-4 text-lg font-semibold text-gray-700 line-clamp-1">
          {product.name}
        </h3>
      </div>
      <div className="flex flex-col w-full mt-2">
        <PriceSmallItem product={product} />
        {product.state === "novo" ? (
          <Link
            target="_blank"
            href={`https://wa.me/5547996259348?text=Gostaria%20de%20saber%20mais%20sobre%20o%20produto%20${product.name}%20${product.price}.%0D%0A%0D%0Ahttps%3A%2F%2Fwww.moveis-eliane.com%2Fprodutos%2F${product.id}`}
          >
            <Button
              h={30}
              w={"full"}
              rounded={"full"}
              colorScheme="green"
              className={currentColor}
            >
              <ShoppingOutlined />
              <span className="">Comprar</span>
            </Button>
          </Link>
        ) : (
          <Link
            target="_blank"
            href={`https://wa.me/5547996259348?text=Gostaria%20de%20saber%20mais%20sobre%20o%20produto%20${product.name}%20${product.price}.%0D%0A%0D%0Ahttps%3A%2F%2Fwww.moveis-eliane.com%2Fprodutos%2F${product.id}`}
          >
            <Button colorScheme="red" className={currentColor} disabled>
              <ShoppingOutlined />
              <span className="">Comprar</span>
            </Button>
          </Link>
        )}
      </div>
    </a>
  );
}

export function PriceSmallItem({ product }: { product: ProductType }) {
  if (product.discount) {
    return (
      <div className="flex flex-col w-full text-center">
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
