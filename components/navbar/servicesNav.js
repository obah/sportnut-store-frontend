import Link from "next/link";

export default function ServicesNav() {
  const smallText =
    "font-normal text-xs text-center hover:font-bold hover:border-b-2 hover:border-b-secondary";
  const boldSmallText =
    "font-bold text-xs text-center hover:font-normal hover:border-b-2 hover:border-b-secondary";

  return (
    <div className="center bg-neutral-200">
      <nav className="flex justify-end gap-5 w-full h-10 py-3">
        <Link href={"/"} className={smallText + " w-28"}>
          Pickup & Delivery
        </Link>
        <Link href={"/"} className={smallText + " w-12"}>
          Services
        </Link>
        <div className="border-l border-neutral-400"></div>
        <Link href={"/"} className={boldSmallText + " w-16 "}>
          Track order
        </Link>
        <Link href={"/"} className={boldSmallText + " w-8"}>
          Help
        </Link>
      </nav>
    </div>
  );
}
