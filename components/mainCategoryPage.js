/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import HouseJersey from "@/images/house-jersey.jpg";
import MeasureShoe from "@/images/measure-shoe.jpg";
import RunAmbassador from "@/images/run-ambassador.jpg";
import SportBras from "@/images/sport-bras.jpg";
import MiniBlog from "./miniBlog";
import { BigCenter } from "./viewPorts";

export default function MainCategoryPage({ mainCategory, subCategory }) {
  const nikeId = "64a331eba7a4adbcb9ca3d36";
  const adidasId = "64a331f6a7a4adbcb9ca3d3a";

  const tipsData = [
    {
      id: 1,
      title: "How to Measure Shoe Size / Shoe Size Charts by Brand",
      text: "Find heel-to-toe comfort with the help of these foot size measuring tips and shoe size guide from Pro Tips.",
      image: MeasureShoe,
      imageAlt: "people wearing shoes sitting",
    },
    {
      id: 2,
      title: "Running Ambassadors' Favorites: Their Top Shoes For Running",
      text: "Shop these footwear favorites handpicked by our in-store running experts.",
      image: RunAmbassador,
      imageAlt: "people serving as ambassadors",
    },
    {
      id: 3,
      title: "Jersey Buying Guide | ProTips by Sportnut store",
      text: "Learn more about jersey types from your favorite leagues and teams, including the NFL, MLB, NBA and more. Find out what makes an authentic authentic vs. a replica jersey and find your perfect fit!",
      image: HouseJersey,
      imageAlt: "jersies",
    },
    {
      id: 4,
      title: "Guide to Sports Bras",
      text: "No matter your bust size, the right sports bra is essential for your training and activities. Learn how to find a bra that fits you comfortably and securely.",
      image: SportBras,
      imageAlt: "lady doing yoga",
    },
  ];

  let mainImage = "";
  let imageAlt = "";
  let mainText = "";
  let content = "";
  let tagline = "";

  switch (mainCategory.categoryName) {
    case "Sports":
      mainImage = "/images/sports-cat.webp";
      imageAlt = "Softball game";
      mainText = "Dominate the Diamond";
      content = "Gear up with the latest baseball and softball essentials";
      tagline = "Sports Equipment";
      break;
    case "Men":
      mainImage = "/images/men-cat.avif";
      imageAlt = "male athlete";
      mainText = "New Summer Arrivals";
      content = "Grab fresh styles just in time for summer!";
      tagline = "Shop Men's";
      break;
    case "Women":
      mainImage = "/images/women-cat.avif";
      imageAlt = "female sports model";
      mainText = "New Arrivals";
      content = "Fits you'll wear on repeat";
      tagline = "Shop Women's";
      break;
    case "Kids":
      mainImage = "/images/kids-cat.avif";
      imageAlt = "children having fun";
      mainText = "New Kids' Arrivals";
      content = "Gear them up for this season's latest looks";
      tagline = "Shop Kids'";
      break;
    case "Health":
      mainImage = "/images/health-cat.avif";
      imageAlt = "woman using cardio machine";
      mainText = "New! Sole F63 & F80 Treadmills";
      content = "The latest cardio equipment to work out at your own pace";
      tagline = "Exercise & Fitness Equipment";
      break;
    case "Outdoor":
      mainImage = "/images/outdoor-cat.webp";
      imageAlt = "outdoor activities";
      mainText = "Deals that Get You Outdoors";
      content =
        "BOGO 50% Off Outdoor Games, 40% Off Select Kayaks, & More Savings for Your Next Adventure";
      tagline = "Outdoor";
      break;
    case "Fan Shop":
      mainImage = "/images/fan-cat.avif";
      imageAlt = "fan products";
      mainText = "Tailgate and Backyard Essentials";
      content = "Assemble the perfect gameday setup";
      tagline = "Fan Shop Gear";
      break;
    case "Accessories":
      mainImage = "/images/accessories-cat.avif";
      imageAlt = "cooking tools";
      mainText = "YETI New Arrivals";
      content = "Take on the day with the latest colors and styles";
      tagline = "Accessories";
  }

  const letters = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const brandStyle = "underline font-semibold hover:cursor-pointer";

  return (
    <BigCenter>
      {mainCategory._id === "64a32f83981ca04e0c3099e4" ? (
        <div className="px-72">
          <h1 className="border-b py-10 text-center text-4xl font-bold">
            SHOP ALL BRANDS
          </h1>
          <h3 className="py-4 text-center text-2xl font-semibold">Est. 2022</h3>
          <p className="mb-16 mt-3">
            SportNut Store is proud to offer high-quality sporting goods
            equipment and gear from the top brands you trust. Since 2022,
            SportNut Store has brought you the brands that make you untouchable
            on the field, on the court and anywhere else you play your sport.
            Now you can easily find the brands from our stores on our Web site.
            From our collection of apparel and footwear from{" "}
            <span className={brandStyle}>The North Face</span>,{" "}
            <span className={brandStyle}>Nike</span> and{" "}
            <span className={brandStyle}>Under Armour</span>, to our premium
            equipment from <span className={brandStyle}>TaylorMade</span>,{" "}
            <span className={brandStyle}>Field & Stream</span> and{" "}
            <span className={brandStyle}>DeMarini</span>, you’ll find all the
            best brands and gear right here.
          </p>
          <div className="text-md mb-4 flex justify-center text-primary">
            {letters.map((letter) => (
              <p
                key={letter}
                className="w-6 border-r border-r-black text-center last:border-r-0 hover:cursor-pointer"
              >
                {letter}
              </p>
            ))}
          </div>
          <div className="border border-neutral-500">
            <div className="border border-neutral-500">
              <h3 className="border border-neutral-500 px-4 py-2 text-lg font-semibold">
                A
              </h3>
              <div>
                <ul className="list-inside list-disc border marker:text-black">
                  <li className="text-md px-4 py-4">
                    <Link href={"/sp/" + adidasId}>Adidas</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-neutral-500">
              <h3 className="border border-neutral-500 px-4 py-2 text-lg font-semibold">
                N
              </h3>
              <div>
                <ul className="list-inside list-disc border marker:text-black">
                  <li className="text-md px-4 py-4">
                    <Link href={"/sp/" + nikeId}>Nike</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-10 text-center">
            <h3 className="text-3xl font-extrabold text-primary">
              More favorite brands coming soon...
            </h3>
          </div>
        </div>
      ) : (
        <>
          <div className="mb-14 flex border-b border-b-neutral-400">
            <div className="w-1/4">
              <h2 className="border-b px-4 py-8 text-2xl font-semibold">
                {tagline}
              </h2>
              {subCategory.map((category) => (
                <div key={category._id} className="px-2">
                  <Link
                    href={"/sp/" + category._id}
                    className="flex h-20 items-center gap-4 rounded-sm border-b border-l-4 border-b-neutral-400 border-l-transparent px-2 hover:border-r hover:border-t hover:border-l-secondary hover:font-semibold hover:shadow-md"
                  >
                    <img src={category.image} alt="" className="h-14" />
                    {category.categoryName}
                  </Link>
                </div>
              ))}
            </div>
            <div className="relative w-3/4">
              <img
                src={mainImage}
                alt={imageAlt}
                className="rounded-md object-cover"
              />
              <div className="absolute left-14 top-0 flex h-full w-1/2 flex-col justify-center gap-3 text-white">
                <h1 className="text-6xl font-black shadow-black [text-shadow:0_4px_8px_var(--tw-shadow-color)]">
                  {mainText}
                </h1>
                <p className="text-lg font-bold shadow-black [text-shadow:0_4px_8px_var(--tw-shadow-color)]">
                  {content}
                </p>
                <Link
                  href={"/pp/" + mainCategory._id}
                  className="primary-btn w-1/3 py-3 text-center"
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div>
            <MiniBlog
              category={mainCategory.categoryName}
              categoryId={mainCategory._id}
            />
          </div>
          <div className="mt-20">
            <h2 className="mb-6 text-center text-5xl font-black">
              <span className="text-primary">{`SPORTNUT'S `}</span>PRO TIPS
            </h2>
            <div className="flex justify-center gap-6 px-6">
              {tipsData.map((tip) => (
                <div key={tip.id} className="w-1/4 border text-center">
                  <Link href={"/ip"}>
                    <Image
                      src={tip.image}
                      alt={tip.imageAlt}
                      className="mb-3"
                    />
                    <h3 className="p-3 pb-1 font-bold">{tip.title}</h3>
                    <div className="mx-auto w-10 border-t border-t-secondary pb-3"></div>
                    <p className="px-3 pb-9 pt-0 text-sm">
                      <span className="line-clamp-3 ">{tip.text}</span>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </BigCenter>
  );
}
