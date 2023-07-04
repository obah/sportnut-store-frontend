import Link from "next/link";
import ProductBox from "./productBox";

export default function ProductsShowcase() {
  const gridBox = "flex justify-between gap-5 px-3 overflow-x-scroll";

  const hotProductsData = [
    {
      _id: 1,
      name: "Stanley 40 oz. Quencher H2.0 FlowState Tumbler",
      price: 30.0,
      images: () => require("../images/cup1.webp"),
    },
    {
      _id: 2,
      name: "Stanley 30 oz. Quencher H2.0 FlowState Tumbler",
      price: 45.0,
      images: () => require("../images/cup1.webp"),
    },
    {
      _id: 3,
      name: "Quest 10'x10' Q64 Slant Leg Canopy",
      price: 164.99,
      images: () => require("../images/canopy1.webp"),
    },
    {
      _id: 4,
      name: "Birkenstock Women's Arizona Essentials EVA Sandals",
      price: 44.99,
      images: () => require("../images/slide1.webp"),
    },
    {
      _id: 5,
      name: "Men's Jordan 1 Vapor Edge Football Cleats",
      price: 159.99,
      images: () => require("../images/jordan1.webp"),
    },
  ];

  const recommendedProductsData = [
    {
      _id: 1,
      name: "Bombas Women's Marls Ankle Socks",
      price: 30.0,
      images: () => require("../images/socks1.webp"),
    },
    {
      _id: 2,
      name: "HOKA Women's Clifton 9 Running Shoes",
      price: 159.99,
      images: () => require("../images/hoka1.webp"),
    },
    {
      _id: 3,
      name: "Roxy Women's Lover in the Sun Bucket Hat",
      price: 26.0,
      images: () => require("../images/bucket-hat1.jpg"),
    },
    {
      _id: 4,
      name: "HOKA Women's Rincon 3 Running Shoes",
      price: 111.98,
      images: () => require("../images/hoka2.webp"),
    },
    {
      _id: 5,
      name: "League-Legacy Men's Virginia Cavaliers Orange Vintage T-Shirt",
      price: 35.0,
      images: () => require("../images/shirt1.webp"),
    },
  ];

  return (
    <div className="center">
      <div className="grid grid-cols-2 gap-6 px-8 mt-14">
        <div>
          <GridTitle title={"Hot In Your Area"} />
          <div className={gridBox}>
            {hotProductsData.map((product) => (
              <div key={product._id}>
                <ProductBox {...product} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <GridTitle title={"Recommended For You"} />
          <div className={gridBox}>
            {recommendedProductsData.map((product) => (
              <div key={product._id}>
                <ProductBox {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GridTitle({ title }) {
  return (
    <div>
      <div className="flex gap-2 justify-between ">
        <h2 className=" text-sm font-bold">{title}</h2>
        <Link href={"/products"} className=" text-xs font-semibold underline ">
          View All
        </Link>
      </div>
      <div className="border-b border-black w-full mb-6"></div>
    </div>
  );
}
