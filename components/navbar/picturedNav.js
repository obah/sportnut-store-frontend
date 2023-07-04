/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import Link from "next/link";

export default function PicturedNav({ categories }) {
  //use this categories prop for the real category just like it was implemented in categoriesNav, but till its available, use dummy data
  const categoriesData = [
    {
      title: "New Arrivals",
      imageUrl: () => require("../../images/new-arrivals.jpg"),
    },
    {
      title: "Sports",
      imageUrl: () => require("../../images/sports.jpg"),
    },
    {
      title: "Men",
      imageUrl: () => require("../../images/men.jpg"),
    },
    {
      title: "Women",
      imageUrl: () => require("../../images/women.jpg"),
    },
    {
      title: "Kids",
      imageUrl: () => require("../../images/kids.jpg"),
    },
    {
      title: "Golf",
      imageUrl: () => require("../../images/golf.jpg"),
    },
    {
      title: "Outdoor",
      imageUrl: () => require("../../images/outdoor.jpg"),
    },
    {
      title: "Fan shop",
      imageUrl: () => require("../../images/fan-shop.jpg"),
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
                src={category.imageUrl()}
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
