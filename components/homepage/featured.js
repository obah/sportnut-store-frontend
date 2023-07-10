"use client";

import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Featured1 from "@/images/featured1.jpg";
import Featured2 from "@/images/featured2.jpg";
import Featured3 from "@/images/featured3.jpg";
import Featured4 from "@/images/featured4.jpg";

export default function Featured() {
  const carouselData = [
    {
      id: 1,
      title: "hot summer savings!",
      offer:
        "Up to 50% Off Deals on Footwear, Apparel, Outdoor Must-Haves and More",
      text: "Valid through 7/6/23. Select styles. While supplies last.",
      imageUrl: Featured1,
      pageLink: "/c/64a32f66981ca04e0c3099db",
    },
    {
      id: 2,
      title: "the latest launches",
      offer: "",
      text: "Get them before they're gone",
      imageUrl: Featured2,
      pageLink: "/c/64a32f83981ca04e0c3099e4",
    },
    {
      id: 3,
      title: "up to 50% off deals to get you outside",
      offer: "",
      text: "Up to 60% off select bikes, $100 off select kayaks, BOGO free select life vests, 20% off Igloo coolers & more",
      imageUrl: Featured3,
      pageLink: "/c/64a32f66981ca04e0c3099db",
    },
    {
      id: 4,
      title: "keep your season in full swing",
      offer: "Get Course-Ready with New Arrivals from Your Favorite Brands",
      text: "Plus. score top deals on equipment, apparel and more",
      imageUrl: Featured4,
      pageLink: "/sp/64a5881f4dd897ed22ab01e8",
    },
  ];

  return (
    <div className="center mt-4">
      <Carousel
        showStatus={false}
        autoPlay={true}
        useKeyboardArrows={true}
        infiniteLoop={true}
      >
        {carouselData.map((carousel) => (
          <div
            key={carousel.id}
            className="flex flex-col justify-center items-center w-full h-[600px] relative"
          >
            <Image
              src={carousel.imageUrl}
              alt=""
              className="w-full h-full absolute object-cover top-0 left-0"
            />
            <div className="bg-blurry px-10 py-10 backdrop-blur-sm z-10 text-center w-1/2">
              <h1 className="uppercase font-bold text-7xl mb-4">
                {carousel.title}
              </h1>
              <p className="font-semibold text-lg mb-4">{carousel.offer}</p>
              <p className="mb-4">{carousel.text}</p>
              <Link href={carousel.pageLink} className="primary-btn px-20 py-2">
                SHOP NOW
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="mb-16"></div>
    </div>
  );
}
