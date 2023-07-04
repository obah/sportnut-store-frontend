"use client";

import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Featured({ product }) {
  const carouselData = [
    {
      id: 1,
      title: "hot summer savings!",
      offer:
        "Up to 50% Off Deals on Footwear, Apparel, Outdoor Must-Haves and More",
      text: "Valid through 7/6/23. Select styles. While supplies last.",
      imageUrl: () => require("../images/featured1.jpg"),
    },
    {
      id: 2,
      title: "the latest launches",
      offer: "",
      text: "Get them before they're gone",
      imageUrl: () => require("../images/featured2.jpg"),
    },
    {
      id: 3,
      title: "up to 50% off deals to get you outside",
      offer: "",
      text: "Up to 60% off select bikes, $100 off select kayaks, BOGO free select life vests, 20% off Igloo coolers & more",
      imageUrl: () => require("../images/featured3.jpg"),
    },
    {
      id: 4,
      title: "keep your season in full swing",
      offer: "Get Course-Ready with New Arrivals from Your Favorite Brands",
      text: "Plus. score top deals on equipment, apparel and more",
      imageUrl: () => require("../images/featured4.jpg"),
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
              src={carousel.imageUrl()}
              alt=""
              className="w-full h-full absolute object-cover top-0 left-0"
            />
            <div className="bg-blurry px-10 py-10 backdrop-blur-sm z-10 text-center w-1/2">
              <h1 className="uppercase font-bold text-7xl mb-4">
                {carousel.title}
              </h1>
              <p className="font-semibold text-lg mb-4">{carousel.offer}</p>
              <p className="mb-4">{carousel.text}</p>
              <Link
                href={"/product/" + product._id}
                className="primary-btn px-20 py-2"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="mb-16"></div>
    </div>
  );

  // return (
  //   <div className="text-white px-0 py-12">
  //     <div className="center">
  //       <div className="grid-view">
  //         <div className="flex flex-col gap-3 justify-center items-center order-last sm:order-1">
  //           <h1 className="m-0 text-4xl sm:text-6xl">{product.name}</h1>
  //           <p className="text-neutral-400 text-sm">{product.description}</p>
  //           <div className="flex gap-2 mt-2">
  //             <Link
  //               href={"/products/" + product._id}
  //               className={"outline-btn" + btn}
  //             >
  //               Read more
  //             </Link>
  //             <button
  //               onClick={addFeaturedItemToCart}
  //               className={"primary-btn inline-flex gap-1 items-center" + btn}
  //             >
  //               <CartIcon />
  //               Add to cart
  //             </button>
  //           </div>
  //         </div>
  //         <div className="flex items-center justify-center order-2">
  //           {/* eslint-disable-next-line @next/next/no-img-element */}
  //           <img
  //             src="https://sportnut-dashbord.s3.amazonaws.com/1686667842290.6462.jpg"
  //             alt="featured product"
  //             className="max-w-full max-h-[200px] sm:max-h-full"
  //           />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
}
