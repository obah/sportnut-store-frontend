import { DollarIcon, HeartIcon, StoreIcon, TruckIcon } from "../icons";
import Link from "next/link";
import { BigCenter } from "../viewPorts";

export default function Promo() {
  const offerDetails = [
    {
      id: 1,
      title: "Best Price Guarantee",
      text: "If You Find a Lower Price, We’ll Match It.",
      logo: <DollarIcon />,
      url: "/ip",
      btn: "Learn More",
    },
    {
      id: 2,
      title: "Free One-Hour Pickup",
      text: "Curbside or In-Store",
      logo: <StoreIcon />,
      url: "/ip",
      btn: "Learn More",
    },
    {
      id: 3,
      title: "Free Shipping",
      text: "Exclusions and minimum order values may apply.",
      logo: <TruckIcon />,
      url: "/ip",
      btn: "Details",
    },
    {
      id: 4,
      title: "Help Save Youth Sports",
      text: "Every Kid Deserves a Chance to Play",
      logo: <HeartIcon />,
      url: "/ip",
      btn: "Donate",
    },
  ];

  return (
    <BigCenter styles={"md:px-6"}>
      <div className="mb-8 mt-14 lg:flex lg:justify-between">
        {offerDetails.map((offer) => (
          <div
            key={offer.id}
            className="flex w-full gap-4 border-b border-b-neutral-200 px-4 py-2 last:border-b-0 lg:w-80 lg:justify-center lg:gap-3 lg:border-b-0 lg:border-l lg:border-l-neutral-200 lg:px-5 lg:py-0 lg:first:border-l-0"
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
    </BigCenter>
  );
}
