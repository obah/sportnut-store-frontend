"use client";

import ServicesNav from "./navbar/servicesNav";
import SubNav from "./navbar/subNav";
import CategoriesNav from "./navbar/categoriesNav";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Menu({ categories }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  const pathName = usePathname();

  // const navlink = "text-neutral-400";
  // const openNav = "block ";
  // const closeNav = "hidden sm:flex";

  useEffect(() => {
    setNavOpen(false);
  }, [pathName]);

  return (
    <>
      <ServicesNav />
      <SubNav menu={navOpen} toggle={toggleMenu} />
      <CategoriesNav categories={categories} menu={navOpen} />
    </>
  );
  // <header className="">
  //   <div className="center">
  //     <div className="flex justify-between px-0 py-5">
  //       <Link href={"/"} className="text-white relative z-10">
  //         Sportnut store
  //       </Link>
  //       <nav
  //         className={
  //           (navOpen ? openNav : closeNav) +
  //           " flex flex-col sm:flex-row gap-6 sm:gap-4 pl-20 pt-20 sm:pt-0 fixed sm:static top-0 bottom-0 left-0 right-0 bg-neutral-800"
  //         }
  //       >
  //         <Link href={"/"} className={navlink}>
  //           Home
  //         </Link>
  //         <Link href={"/products"} className={navlink}>
  //           All products
  //         </Link>
  //         <Link href={"/categories"} className={navlink}>
  //           Categories
  //         </Link>
  //         <Link href={"/account"} className={navlink}>
  //           Account
  //         </Link>
  //         <Link href={"/cart"} className={navlink}>
  //           Cart ({cartProducts.length})
  //         </Link>
  //       </nav>
  //       <button
  //         onClick={() => {
  //           setNavOpen(!navOpen);
  //         }}
  //         className="text-white sm:hidden relative z-10"
  //       >
  //         <MenuIcon />
  //       </button>
  //     </div>
  //   </div>
  // </header>
}
