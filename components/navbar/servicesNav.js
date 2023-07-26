import Link from "next/link";

export default function ServicesNav() {
  const smallText =
    "font-normal text-xs text-center hover:font-bold hover:border-b-2 hover:border-b-secondary";
  const boldSmallText =
    "font-bold text-xs text-center hover:font-normal hover:border-b-2 hover:border-b-secondary";

  return (
    <div className="center hidden bg-neutral-100 md:block">
      <nav className="flex h-10 max-w-[1650px] items-stretch justify-end gap-5 py-3">
        <Link href={"/ip"} className={smallText + " w-28"}>
          Pickup & Delivery
        </Link>
        <Link href={"/ip"} className={smallText + " w-12"}>
          Services
        </Link>
        <div className="border-l border-neutral-400"></div>
        <Link href={"/ip"} className={boldSmallText + " w-16 "}>
          Track order
        </Link>
        <Link href={"/ip"} className={boldSmallText + " w-8"}>
          Help
        </Link>
      </nav>
    </div>
  );
}
