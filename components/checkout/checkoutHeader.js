import Link from "next/link";
import Image from "next/image";
import { CartIcon } from "../icons";
import sportnut_logo from "@/public/sportnut_logo.svg";

function CheckoutHeader() {
  return (
    <header className="mb-6 flex justify-between bg-primary px-10 py-2 md:px-16 lg:px-36">
      <Link href={"/"}>
        <Image src={sportnut_logo} alt="sportnut logo" className="w-14" />
      </Link>
      <Link href={"/cart"} className="flex items-center justify-center">
        <CartIcon className="h-6 w-6 fill-white text-white" />
      </Link>
    </header>
  );
}

export default CheckoutHeader;
