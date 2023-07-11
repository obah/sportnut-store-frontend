import Link from "next/link";
import Image from "next/image";
import NewSwim from "@/images/new-swim.jpg";
import NewTennis from "@/images/new-tennis.jpg";
import StarGolf from "@/images/star-golf.jpg";
import Bottles from "@/images/bottles.jpg";
import Backyard from "@/images/backyard.jpg";
import Tailgate from "@/images/tailgate.jpg";
import { categoryIds } from "@/lib/data";

export default function NewProducts() {
  const newItemsData = [
    {
      id: 1,
      title: "Swimwear to Upgrade Your Bech Look",
      text: "Plus, find up to 50% off select styles",
      image: NewSwim,
      imageAlt: "beach scene",
      url: "/sp/" + categoryIds.swimsuitId,
    },
    {
      id: 2,
      title: "Command the Court Your Way",
      text: "Find everything you need to own every set",
      image: NewTennis,
      imageAlt: "tennis court",
      url: "/sp/" + categoryIds.tennisId,
    },
  ];

  const promoItemsData = [
    {
      id: 1,
      title: "Stars and Stripes for the Course",
      text: "Sport the red, white and blue from tee to green",
      image: StarGolf,
      imageAlt: "golf clubs",
      url: "/sp/" + categoryIds.golfId,
    },
    {
      id: 2,
      title: "Tailgate Essentials",
      text: "Build the perfect pre-game setup",
      image: Tailgate,
      imageAlt: "sports accessories",
      url: "/pp/" + categoryIds.accessoriesId,
    },
    {
      id: 3,
      title: "Backyard Deals",
      text: "20% off Igloo coolers, up to $250 off grills, $20 off select canopies & more",
      image: Backyard,
      imageAlt: "backyard scene",
      url: "/pp/" + categoryIds.outdoorId,
    },
    {
      id: 4,
      title: "Back to School Hydration",
      text: "New Stanley 30 oz. and 40 oz. Quencher colors, plus more drinkware from favorite brands",
      image: Bottles,
      imageAlt: "new stanley bottles",
      url: "/sp/" + categoryIds.drinkwareId,
    },
  ];

  return (
    <div className="center">
      <h1 className="my-10 font-black text-4xl text-center text-primary">
        THE LATEST LINEUP
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {newItemsData.map((newItem) => (
          <div key={newItem.id}>
            <NewItem itemData={newItem} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-7">
        {promoItemsData.map((item) => (
          <div key={item.id}>
            <NewItem itemData={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function NewItem({ itemData }) {
  return (
    <div className="flex flex-col gap-7 items-center mb-10">
      <Link href={itemData.url}>
        <Image src={itemData.image} alt={itemData.imageAlt} />
      </Link>
      <h2 className="font-extrabold text-3xl text-center">{itemData.title}</h2>
      <p className="text-center">{itemData.text}</p>
      <Link href={itemData.url} className="link-btn">
        SHOP NOW
      </Link>
    </div>
  );
}
