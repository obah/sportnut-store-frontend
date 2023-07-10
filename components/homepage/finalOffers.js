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
      <div className="center">
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
              <div className="bg-neutral-100 flex flex-col gap-7 text-center justify-center items-center px-10 absolute top-0 right-0 z-10 w-[730px] h-[580px]">
                <h2 className="text-6xl font-extrabold">{carousel.title}</h2>
                <p>{carousel.text}</p>
                <Link href={carousel.url} className="primary-btn py-2 px-20">
                  LEARN MORE
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <div className="big-center">
        <div className="bg-[url('../images/pickup-promo.jpg')] bg-cover bg-center h-[400px] mt-20">
          <div className="grid-view px-8 py-12">
            <div className="flex flex-col items-center justify-center gap-8">
              <p className="text-center text-white font-bold text-6xl">
                Get Your Gear Today With One-Hour Pickup
              </p>
              <Link
                href={"/c/64a32f3f981ca04e0c3099cc"}
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
      </div>
    </div>
  );
}
