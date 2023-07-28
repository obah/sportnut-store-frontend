"use client";

import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Link from "next/link";
import CreditCard from "@/images/credit-card.jpg";
import Shipping from "@/images/shipping.jpg";
import SmilingMan from "@/images/smiling-man.jpg";
import SportLives from "@/images/sport-lives.jpg";
import MiniProductBox from "../miniProductBox";
import { categoryIds } from "@/lib/data";
import { BigCenter, Center } from "../viewPorts";

export default function FinalOffers({ products }) {
  const carouselData = [
    {
      id: 1,
      title: "SPORTS CHANGE LIVES",
      text: "In partnership with Nike and Jordan, we are spotlighting 10 real stories of personal change through sport. Hear how sports have impacted them, plus, go behind the scenes with the athletes, learn about our 75for75 Sports Matter grants and more.",
      image: SportLives,
      imageAlt: "people",
      url: "/ip",
    },
    {
      id: 2,
      title: "EARN A $30 BONUS REWARD",
      text: "Open and use a new ScoreRewards credit card today.",
      image: CreditCard,
      imageAlt: "credit cards",
      url: "/ip",
    },
    {
      id: 3,
      title: "FAST AND EASY WAYS TO GET YOUR GEAR",
      text: "Curbside pickup starting at 8AM. In-stock items only. Exceptions apply.",
      image: Shipping,
      imageAlt: "shipping and delivery banner",
      url: "/ip",
    },
    {
      id: 4,
      title: "SIGN UP AND SAVE WITH TEXT ALERTS!",
      text: "Join DICK'S Text Alerts Program to get the scoop on the hottest trends, latest updates, biggest deals and more. Plus, receive an exclusive offer upon joining! First-time subscribers only. Exclusions apply. Click for details.",
      image: SmilingMan,
      imageAlt: "smiling man",
      url: "/ip",
    },
  ];

  return (
    <div>
      <Center styles={"hidden lg:block"}>
        <Carousel
          showStatus={false}
          autoPlay={true}
          useKeyboardArrows={true}
          infiniteLoop={true}
        >
          {carouselData.map((carousel) => (
            <div key={carousel.id}>
              <div className="relative">
                <Link href={carousel.url}>
                  <Image src={carousel.image} alt={carousel.imageAlt} />
                </Link>
              </div>
              <div className="absolute right-0 top-0 z-10 flex h-[580px] w-[730px] flex-col items-center justify-center gap-7 bg-neutral-100 px-10 text-center">
                <h2 className="text-6xl font-extrabold">{carousel.title}</h2>
                <p>{carousel.text}</p>
                <Link href={carousel.url} className="primary-btn px-20 py-2">
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </Center>
      <BigCenter>
        <div className="mt-20 bg-[url('../images/pickup-promo.jpg')] bg-cover bg-center md:h-[620px] lg:h-[400px]">
          <div className="flex flex-col gap-16 px-4 py-12 md:px-8 lg:grid lg:grid-cols-[0.8fr_1.2fr] lg:gap-6">
            <div className="flex flex-col items-center justify-center gap-10 lg:gap-8">
              <p className="text-center text-4xl font-bold text-white md:font-black lg:text-6xl lg:font-bold">
                Get Your Gear Today With One-Hour Pickup
              </p>
              <Link
                href={"/c/" + categoryIds.sportId}
                className="primary-btn px-16 py-3"
              >
                SHOP NOW
              </Link>
            </div>
            <div className="flex justify-between gap-5 overflow-x-scroll">
              {products.map((product) => (
                <div key={product._id}>
                  <MiniProductBox {...product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </BigCenter>
    </div>
  );
}
