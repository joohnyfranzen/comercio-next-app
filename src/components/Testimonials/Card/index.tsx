import React from "react";
import { TestimonialsCardProps } from "./types";
import { Star } from "react-feather";

export default function TestimonialsCard({
  stars,
  text,
  title,
  name,
}: TestimonialsCardProps) {
  return (
    <blockquote className="flex h-full flex-col justify-between bg-white p-12 mb-4">
      <div>
        <div className="flex gap-0.5">
          {Array.from({ length: stars }, (_, i) => (
            <Star
              key={i}
              size={20}
              className="text-green-500 fill-green-500 mr-1"
            />
          ))}
        </div>

        <div className="mt-4">
          <p className="text-2xl font-bold text-pink-600 sm:text-3xl">
            {title}
          </p>

          <p className="mt-4 leading-relaxed text-gray-500">{text}</p>
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-500">&mdash; {name}</footer>
    </blockquote>
  );
}
