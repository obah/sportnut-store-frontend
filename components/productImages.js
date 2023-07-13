"use client";

import { useState } from "react";

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  const inactiveStyle =
    "p-2 cursor-pointer w-40 h-40 flex items-center justify-center shadow hover:Shadow-3xl hover:shadow-black";
  const activeStyle = inactiveStyle + " border border-gray-400 rounded-sm ";

  return (
    <>
      <div className="flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeImage}
          alt=""
          className="max-w-full max-h-96 flex items-center justify-center"
        />
      </div>
      <div className="grid grid-cols-3 gap-1 p-6 mx-auto w-full ">
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
