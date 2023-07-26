import Link from "next/link";
import Image from "next/image";
import {
  UserIcon,
  LocationIcon,
  CartIcon,
  SearchIcon,
  MenuIcon,
} from "../icons";
import sportnut_logo from "@/public/sportnut_logo.svg";

export default function SubNav({ menu, toggle }) {
  const mainLink = "group-hover:underline font-bold";
  const icons = "w-5 h-5 group-hover:fill-none";

  return (
    <div className="center">
      <nav className="flex items-center justify-between py-6">
        <button onClick={toggle} className="relative z-10 text-black lg:hidden">
          <div className="flex flex-col items-center justify-center">
            <MenuIcon className="h-6 w-6" />
            <p className="text-sm">Menu</p>
          </div>
        </button>
        <Link href={"/"}>
          <Image src={sportnut_logo} alt="sportnut logo" className="w-14" />
        </Link>
        <div className="relative hidden w-2/3 lg:block">
          <input
            type="text"
            placeholder={"What are you looking for?"}
            className="box-content w-3/4 appearance-none rounded-full border-2 bg-neutral-100 py-3 pl-12 pr-4 text-black focus:border-primary focus:outline-none"
          />
          <div className="absolute left-6 top-4 flex items-center text-neutral-400">
            <SearchIcon className="h-5 w-5" />
          </div>
        </div>
        <Link href={"/"} className="group hidden md:flex ">
          <LocationIcon className={icons} />
          <div>
            <p className={mainLink}>Location</p>
            <p className="text-xs">Delivery Location</p>
          </div>
        </Link>
        <Link href={"/account"} className="group hidden md:flex">
          <UserIcon className={icons} />
          <div>
            <p className={mainLink}>My Account</p>
            <p className="text-xs">Sign In to Earn Points</p>
          </div>
        </Link>
        <div className="flex gap-3 md:hidden">
          <Link
            href={"/account"}
            className="group flex flex-col items-center justify-center gap-1 md:hidden"
          >
            <UserIcon className={icons} />
            <p className={mainLink}>Sign In</p>
          </Link>
          <Link
            href={"/cart"}
            className="group flex flex-col items-center justify-center gap-1"
          >
            <CartIcon className={icons} />
            <p>Cart</p>
          </Link>
        </div>
        <Link
          href={"/cart"}
          className="group hidden md:flex md:flex-col md:items-center md:justify-center md:gap-1 "
        >
          <CartIcon className={icons} />
          <p>Cart</p>
        </Link>
      </nav>
      <div className="relative block w-full lg:hidden ">
        <input
          type="text"
          placeholder={"What are you looking for?"}
          className="mb-3 box-content w-3/4 appearance-none rounded-full border-2 bg-neutral-100 py-3 pl-12 pr-4 text-black focus:border-primary focus:outline-none"
        />
        <div className="absolute left-6 top-4 flex items-center text-neutral-400">
          <SearchIcon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
