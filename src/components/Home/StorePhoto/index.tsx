import React from "react";

export default function StorePhoto() {
  return (
    <div
      className="relative bg-white py-16 sm:py-24 lg:py-32"
      style={{
        backgroundImage: "url('/images/place.jfif')",
        backgroundPosition: "0% 40%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h3 className="text-3xl font-semibold tracking-tight text-gray-50 sm:text-5xl text-center">
        Estamos proximo de você!
      </h3>
    </div>
  );
}
