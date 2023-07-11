/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import HouseJersey from "@/images/house-jersey.jpg";
import MeasureShoe from "@/images/measure-shoe.jpg";
import RunAmbassador from "@/images/run-ambassador.jpg";
import SportBras from "@/images/sport-bras.jpg";
import MiniBlog from "./miniBlog";

export default function MainCategoryPage({ mainCategory, subCategory }) {
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
    <div className="big-center">
      {mainCategory._id === "64a32f83981ca04e0c3099e4" ? (
        <div className="px-72">
          {/* <div></div> */}
          <h1 className="py-10 font-bold text-4xl border-b text-center">
            SHOP ALL BRANDS
          </h1>
          <h3 className="py-4 font-semibold text-2xl text-center">Est. 2022</h3>
          <p className="mt-3 mb-16">
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
          <div className="flex justify-center text-md text-primary mb-4">
            {letters.map((letter) => (
              <p
                key={letter}
                className="w-6 text-center border-r last:border-r-0 border-r-black hover:cursor-pointer"
              >
                {letter}
              </p>
            ))}
          </div>
          <div className="border border-neutral-500">
            <div className="border border-neutral-500">
              <h3 className="border border-neutral-500 py-2 px-4 font-semibold text-lg">
                A
              </h3>
              <div>
                <ul className="border marker:text-black list-disc list-inside">
                  <li className="py-4 px-4 text-md">
                    <Link href={"/sp/64a331f6a7a4adbcb9ca3d3a"}>Adidas</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-neutral-500">
              <h3 className="border border-neutral-500 py-2 px-4 font-semibold text-lg">
                N
              </h3>
              <div>
                <ul className="border marker:text-black list-disc list-inside">
                  <li className="py-4 px-4 text-md">
                    <Link href={"/sp/64a331eba7a4adbcb9ca3d36"}>Nike</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="my-10 text-center">
            <h3 className="font-extrabold text-3xl text-primary">
              More favorite brands coming soon...
            </h3>
          </div>
        </div>
      ) : (
        <>
          <div className="flex border-b border-b-neutral-400 mb-14">
            <div className="w-1/4">
              <h2 className="py-8 px-4 font-semibold text-2xl border-b">
                {tagline}
              </h2>
              {subCategory.map((category) => (
                <div key={category._id} className="px-2">
                  <Link
                    href={"/sp/" + category._id}
                    className="flex items-center gap-4 h-20 px-2 rounded-sm border-b border-b-neutral-400 border-l-4 border-l-transparent hover:border-l-secondary hover:border-r hover:border-t hover:font-semibold hover:shadow-md"
                  >
                    <img src={category.image} alt="" className="h-14" />
                    {category.categoryName}
                  </Link>
                </div>
              ))}
            </div>
            <div className="w-3/4 relative">
              <img
                src={mainImage}
                alt={imageAlt}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col gap-3 justify-center text-white w-1/2 h-full absolute top-0 left-14">
                <h1 className="font-black text-6xl [text-shadow:0_4px_8px_var(--tw-shadow-color)] shadow-black">
                  {mainText}
                </h1>
                <p className="font-bold text-lg [text-shadow:0_4px_8px_var(--tw-shadow-color)] shadow-black">
                  {content}
                </p>
                <Link
                  href={"/pp/" + mainCategory._id}
                  className="primary-btn w-1/3 text-center py-3"
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
            <h2 className="font-black text-5xl text-center mb-6">
              <span className="text-primary">{`SPORTNUT'S `}</span>PRO TIPS
            </h2>
            <div className="flex gap-6 justify-center px-6">
              {tipsData.map((tip) => (
                <div key={tip.id} className="w-1/4 text-center border">
                  <Link href={"/ip"}>
                    {" "}
                    {/**link this and all others to a page that says coming soon */}
                    <Image
                      src={tip.image}
                      alt={tip.imageAlt}
                      className="mb-3"
                    />
                    <h3 className="font-bold p-3 pb-1">{tip.title}</h3>
                    <div className="w-10 mx-auto pb-3 border-t border-t-secondary"></div>
                    <p className="text-sm px-3 pt-0 pb-9">
                      <span className="line-clamp-3 ">{tip.text}</span>
                    </p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
