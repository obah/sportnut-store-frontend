/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";
import NewArrivals from "@/images/new-arrivals.jpg";
import Sports from "@/images/sports.jpg";
import Men from "@/images/men.jpg";
import Women from "@/images/women.jpg";
import Kids from "@/images/kids.jpg";
import Golf from "@/images/golf.jpg";
import Outdoor from "@/images/outdoor.jpg";
import FanShop from "@/images/fan-shop.jpg";

export default function PicturedNav() {
  const categoriesData = [
    {
      title: "New Arrivals",
      imageUrl: NewArrivals,
    },
    {
      title: "Sports",
      imageUrl: Sports,
    },
    {
      title: "Men",
      imageUrl: Men,
    },
    {
      title: "Women",
      imageUrl: Women,
    },
    {
      title: "Kids",
      imageUrl: Kids,
    },
    {
      title: "Golf",
      imageUrl: Golf,
    },
    {
      title: "Outdoor",
      imageUrl: Outdoor,
    },
    {
      title: "Fan shop",
      imageUrl: FanShop,
    },
  ];
  return (
    <div className="big-center">
      <nav className="flex justify-between">
        {categoriesData.map((category) => (
          <div key={category.title} className="group">
            <Link
              href={"/"}
              className="h-40 w-40 flex justify-center items-center relative"
            >
              <Image
                src={category.imageUrl}
                alt=""
                className="group-hover:brightness-50 absolute top-0 left-0 object-cover"
              />
              <span className="z-10 font-black text-2xl text-white">
                {category.title}
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
