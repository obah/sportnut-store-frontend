import HouseJersey from "@/images/house-jersey.jpg";
import MeasureShoe from "@/images/measure-shoe.jpg";
import RunAmbassador from "@/images/run-ambassador.jpg";
import SportBras from "@/images/sport-bras.jpg";
import MiniBlog from "./miniBlog";
import TopBrands from "./mainCategoryPage/topBrands";
import SideMenu from "./mainCategoryPage/sideMenu";
import HeroSection from "./mainCategoryPage/heroSection";
import ProTips from "./mainCategoryPage/proTips";
import { BigCenter } from "./viewPorts";

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

  return (
    <BigCenter>
      {mainCategory._id === "64a32f83981ca04e0c3099e4" ? (
        <TopBrands />
      ) : (
        <>
          <div className="mb-14 flex flex-col border-b border-b-neutral-400 lg:flex-row">
            <SideMenu subCategory={subCategory} tagline={tagline} />

            <HeroSection
              pageId={mainCategory._id}
              content={content}
              imageAlt={imageAlt}
              mainImage={mainImage}
              mainText={mainText}
            />
          </div>

          <MiniBlog
            category={mainCategory.categoryName}
            categoryId={mainCategory._id}
          />

          <ProTips tipsData={tipsData} />
        </>
      )}
    </BigCenter>
  );
}
