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
}
