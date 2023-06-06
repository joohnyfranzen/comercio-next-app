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
      <h3 className="text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl text-center">
        Estamos proximos de você!
      </h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.677984046882!2d-49.11188501411967!3d-26.466106952530957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94de941211d63917%3A0x34531535aed46526!2sEliane%20M%C3%B3veis%20%E2%80%A2%20Novos%20e%20Usados!5e0!3m2!1spt-BR!2sbr!4v1686060125359!5m2!1spt-BR!2sbr"
        width="100% "
        height="650"
        style={{
          border: "40px solid #f9f9f1",
          borderRadius: "10px",
          marginTop: "20px",
        }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
