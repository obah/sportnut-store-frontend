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
import { categoryIds } from "@/lib/data";

export default function PicturedNav() {
  const categoriesData = [
    {
      title: "New Arrivals",
      imageUrl: NewArrivals,
      url: "/c/" + categoryIds.sportId,
    },
    {
      title: "Sports",
      imageUrl: Sports,
      url: "/c/" + categoryIds.sportId,
    },
    {
      title: "Men",
      imageUrl: Men,
      url: "/c/" + categoryIds.menId,
    },
    {
      title: "Women",
      imageUrl: Women,
      url: "/c/" + categoryIds.womenId,
    },
    {
      title: "Kids",
      imageUrl: Kids,
      url: "/c/" + categoryIds.kidsId,
    },
    {
      title: "Golf",
      imageUrl: Golf,
      url: "/sp/" + categoryIds.golfId,
    },
    {
      title: "Outdoor",
      imageUrl: Outdoor,
      url: "/c/" + categoryIds.outdoorId,
    },
    {
      title: "Fan shop",
      imageUrl: FanShop,
      url: "/c/" + categoryIds.fanShopId,
    },
  ];
  return (
    <div className="big-center">
      <nav className="flex justify-between">
        {categoriesData.map((category) => (
          <div key={category.title} className="group">
            <Link
              href={category.url}
              className="relative flex h-40 w-40 items-center justify-center"
            >
              <Image
                src={category.imageUrl}
                alt=""
                className="absolute left-0 top-0 object-cover group-hover:brightness-50"
              />
              <span className="z-10 text-2xl font-black text-white">
                {category.title}
              </span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
