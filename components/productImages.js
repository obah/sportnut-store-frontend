"use client";

import { useState } from "react";

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  const inactiveStyle =
    "p-2 cursor-pointer w-20 h-20 flex items-center justify-center";
  const activeStyle = inactiveStyle + " border border-gray-400 rounded-sm";

  return (
    <>
      <div className="flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImage}
          alt=""
          className="max-w-full max-h-52 flex items-center justify-center"
        />
      </div>
      <div className="grid grid-cols-3 gap-1 p-6 mx-auto w-80 ">
        {images.map((image) => (
          <div
            key={images.indexOf(image)}
            onClick={() => {
              setActiveImage(image);
            }}
            className={
              image === activeImage
                ? activeStyle
                : inactiveStyle + " opacity-30"
            }
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={image} alt="" className="max-h-full max-w-full" />
          </div>
        ))}
      </div>
    </>
  );
}
