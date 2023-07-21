import Link from "next/link";
import Image from "next/image";
import { UserIcon, LocationIcon, CartIcon, SearchIcon } from "../icons";
import sportnut_logo from "@/public/sportnut_logo.svg";

export default function SubNav() {
  const iconLink = "flex group";
  const mainLink = "group-hover:underline font-bold";
  const icons = "w-5 h-5 group-hover:fill-none";

  return (
    <div className="center">
      <nav className="flex items-center justify-between py-6">
        <Link href={"/"}>
          <Image src={sportnut_logo} alt="sportnut logo" className="w-14" />
        </Link>
        <div className="relative w-2/3">
          <input
            type="text"
            placeholder={"What are you looking for?"}
            className="box-content w-3/4 appearance-none rounded-full border-2 bg-neutral-100 py-3 pl-12 pr-4 text-black focus:border-primary focus:outline-none"
          />
          <div className="absolute left-6 top-4 flex items-center text-neutral-400">
            <SearchIcon className="h-5 w-5" />
          </div>
        </div>
        <Link href={"/"} className={iconLink}>
          <LocationIcon className={icons} />
          <div>
            <p className={mainLink}>Location</p>
            <p className="text-xs">Delivery Location</p>
          </div>
        </Link>
        <Link href={"/account"} className={iconLink}>
          <UserIcon className={icons} />
          <div>
            <p className={mainLink}>My Account</p>
            <p className="text-xs">Sign In to Earn Points</p>
          </div>
        </Link>
        <Link href={"/cart"} className="group">
          <CartIcon className={icons} />
          <p>Cart</p>
        </Link>
      </nav>
    </div>
  );
}
