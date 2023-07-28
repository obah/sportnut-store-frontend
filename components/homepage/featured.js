"use client";

import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import Featured1 from "@/images/featured1.jpg";
import Featured2 from "@/images/featured2.jpg";
import Featured3 from "@/images/featured3.jpg";
import Featured4 from "@/images/featured4.jpg";
import { categoryIds } from "@/lib/data";
import { BigCenter } from "../viewPorts";

export default function Featured() {
  const carouselData = [
    {
      id: 1,
      title: "hot summer savings!",
      offer:
        "Up to 50% Off Deals on Footwear, Apparel, Outdoor Must-Haves and More",
      text: "Valid through 7/6/23. Select styles. While supplies last.",
      imageUrl: Featured1,
      pageLink: "/c/" + categoryIds.outdoorId,
    },
    {
      id: 2,
      title: "the latest launches",
      offer: "",
      text: "Get them before they're gone",
      imageUrl: Featured2,
      pageLink: "/c/" + categoryIds.brandId,
    },
    {
      id: 3,
      title: "up to 50% off deals to get you outside",
      offer: "",
      text: "Up to 60% off select bikes, $100 off select kayaks, BOGO free select life vests, 20% off Igloo coolers & more",
      imageUrl: Featured3,
      pageLink: "/c/" + categoryIds.outdoorId,
    },
    {
      id: 4,
      title: "keep your season in full swing",
      offer: "Get Course-Ready with New Arrivals from Your Favorite Brands",
      text: "Plus. score top deals on equipment, apparel and more",
      imageUrl: Featured4,
      pageLink: "/sp/" + categoryIds.golfId,
    },
  ];

  return (
    <BigCenter styles={"mt-4 lg:px-6"}>
      <Carousel
        showStatus={false}
        autoPlay={true}
        useKeyboardArrows={true}
        infiniteLoop={true}
      >
        {carouselData.map((carousel) => (
          <div
            key={carousel.id}
            className="relative flex h-[900px] w-full flex-col items-center justify-center md:h-[500px] lg:h-[600px]"
          >
            <Image
              src={carousel.imageUrl}
              alt=""
              className="h-[600px] w-full object-cover object-left md:absolute md:left-0 md:top-0 md:h-full md:object-center"
            />
            <div className="z-10 w-full bg-neutral-900 p-5 text-center text-white md:w-3/4 md:bg-blurry md:p-10 md:text-black md:backdrop-blur-sm lg:w-1/2">
              <h1 className="mb-4 text-2xl font-extrabold uppercase md:text-4xl md:font-black lg:text-7xl lg:font-bold">
                {carousel.title}
              </h1>
              <p className="mb-4 text-base font-semibold lg:text-lg">
                {carousel.offer}
              </p>
              <p className="mb-4">{carousel.text}</p>
              <Link href={carousel.pageLink} className="primary-btn px-20 py-2">
                SHOP NOW
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="mb-0 lg:mb-16"></div>
    </BigCenter>
  );
}
