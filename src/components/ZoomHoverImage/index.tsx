import React, { useRef, useState } from "react";
import { ZoomHoverImageProps } from "./types";
import Image from "next/image";

export default function ZoomHoverImage({
  src,
  alt,
  className,
}: ZoomHoverImageProps) {
  const ref = useRef<HTMLImageElement>(null);
  const [showZoom, setShowZoom] = useState(false);

  const onMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    if (ref.current) {
      ref.current.style.backgroundPosition = `${x}% ${y}%`;
    }
  };

  return (
    <div className={"relative overflow-hidden " + className}>
      <Image
        fill
        src={src}
        alt={alt}
        className={"object-cover "}
        onMouseMove={onMouseMove}
        onMouseEnter={() => setShowZoom(true)}
        onMouseLeave={() => setShowZoom(false)}
      />
      <Image
        fill
        src={src}
        alt={alt}
        className="top-0 left-0 w-full h-full object-cover absolute pointer-events-none"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "200%",
          backgroundRepeat: "no-repeat",
          backgroundOrigin: "content-box",
          opacity: showZoom ? 1 : 0,
        }}
        ref={ref}
      />
    </div>
  );
}
