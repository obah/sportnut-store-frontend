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
      url: "/c/64a32f3f981ca04e0c3099cc",
    },
    {
      title: "Sports",
      imageUrl: Sports,
      url: "/c/64a32f3f981ca04e0c3099cc",
    },
    {
      title: "Men",
      imageUrl: Men,
      url: "/c/64a32f46981ca04e0c3099cf",
    },
    {
      title: "Women",
      imageUrl: Women,
      url: "/c/64a32f4c981ca04e0c3099d2",
    },
    {
      title: "Kids",
      imageUrl: Kids,
      url: "/c/64a32f50981ca04e0c3099d5",
    },
    {
      title: "Golf",
      imageUrl: Golf,
      url: "/sp/64a5881f4dd897ed22ab01e8",
    },
    {
      title: "Outdoor",
      imageUrl: Outdoor,
      url: "/c/64a32f66981ca04e0c3099db",
    },
    {
      title: "Fan shop",
      imageUrl: FanShop,
      url: "/c/64a32f6f981ca04e0c3099de",
    },
  ];
  return (
    <div className="big-center">
      <nav className="flex justify-between">
        {categoriesData.map((category) => (
          <div key={category.title} className="group">
            <Link
              href={category.url}
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
