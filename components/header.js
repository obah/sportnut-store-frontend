// "use client";

import ServicesNav from "./navbar/servicesNav";
import SubNav from "./navbar/subNav";
import { CategoriesNav } from "./navbar/categoriesNav";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
// import { usePathname } from "next/navigation";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "../context/cartContext";
// import { MenuIcon } from "./icons";

export default async function Header() {
  // const [navOpen, setNavOpen] = useState(false);
  // const { cartProducts } = useContext(CartContext);

  // const pathName = usePathname();

  // const navlink = "text-neutral-400";
  // const openNav = "block ";
  // const closeNav = "hidden sm:flex";

  // useEffect(() => {
  //   setNavOpen(false);
  // }, [pathName]);

  ///////////////////////////////////////////////////////////////////This is the getCategories
  const categoriesDoc = await getCategories();
  const allCategories = categoriesDoc.categories;
  let parentCategories = [];
  let parentCategoriesData = []; //this is it here, just access the name of each object here

  for (const category of allCategories) {
    if (category.parentCategory) {
      parentCategories.push(category.parentCategory);
    }
  }

  const parentCategory = [...new Set(parentCategories)];
  for (const category of allCategories) {
    for (const parent of parentCategory) {
      if (parent === category._id) {
        parentCategoriesData.push(category);
      }
    }
  }
  ///////////////////////////////////////////////////////////////////

  return (
    <header>
      <ServicesNav />
      <SubNav />
      <CategoriesNav categories={parentCategoriesData} />
    </header>
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
  );
}

export async function getCategories() {
  await mongooseConnect();
  const categories = await Category.find({}, null);
  return { categories: JSON.parse(JSON.stringify(categories)) };
}
