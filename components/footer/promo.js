import { DollarIcon, HeartIcon, StoreIcon, TruckIcon } from "../icons";
import Link from "next/link";

export default function Promo() {
  const offerDetails = [
    {
      id: 1,
      title: "Best Price Guarantee",
      text: "If You Find a Lower Price, We’ll Match It.",
      logo: <DollarIcon />,
      url: "/",
      btn: "Learn More",
    },
    {
      id: 2,
      title: "Free One-Hour Pickup",
      text: "Curbside or In-Store",
      logo: <StoreIcon />,
      url: "/",
      btn: "Learn More",
    },
    {
      id: 3,
      title: "Free Shipping",
      text: "Exclusions and minimum order values may apply.",
      logo: <TruckIcon />,
      url: "/",
      btn: "Details",
    },
    {
      id: 4,
      title: "Help Save Youth Sports",
      text: "Every Kid Deserves a Chance to Play",
      logo: <HeartIcon />,
      url: "/",
      btn: "Donate",
    },
  ];

  return (
    <div className="center">
      <div className="mt-14 mb-8 flex justify-between">
        {offerDetails.map((offer) => (
          <div
            key={offer.id}
            className="w-76 px-5 flex gap-3 justify-center border-l border-l-neutral-200 first:border-l-0"
          >
            <div>{offer.logo}</div>
            <div>
              <h3 className="font-bold">{offer.title}</h3>
              <p className="text-xs">{offer.text}</p>
              <Link href={offer.url} className="text-xs underline">
                {offer.btn}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
