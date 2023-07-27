import { DollarIcon, HeartIcon, StoreIcon, TruckIcon } from "../icons";
import Link from "next/link";
import { Center } from "../viewPorts";

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
    <Center>
      <div className="mb-8 mt-14 flex justify-between">
        {offerDetails.map((offer) => (
          <div
            key={offer.id}
            className="w-76 flex justify-center gap-3 border-l border-l-neutral-200 px-5 first:border-l-0"
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
    </Center>
  );
}
