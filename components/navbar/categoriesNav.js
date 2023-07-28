import Link from "next/link";
import { Arrow, QuestionIcon, StoreIcon } from "../icons";
import { FaBox } from "react-icons/fa6";
import { TiSpanner } from "react-icons/ti";
import { BigCenter } from "../viewPorts";

export default function CategoriesNav({ categories, menu }) {
  return (
    <BigCenter styles={"px-0 md:px-6 relative border-t md:border-y"}>
      <div>
        <nav
          className={
            (menu ? "left-0" : " -left-full") +
            " fixed z-50 flex h-screen w-screen flex-col overflow-auto transition-all duration-300 md:w-2/3 lg:static lg:z-0 lg:h-auto lg:w-full lg:flex-row lg:justify-between lg:pt-3"
          }
        >
          <div className="flex items-center justify-between bg-neutral-100 px-3 py-2 lg:hidden">
            <Link href={"/ip"} className="flex items-center gap-3">
              <FaBox className="h-5 w-5" />
              <div>
                <p className="text-lg font-bold">Location</p>
                <p className="text-sm">Delivery Location</p>
              </div>
            </Link>
            <Arrow />
          </div>
          {categories.map((category) => (
            <div
              key={category._id}
              className="w-full border bg-neutral-50 text-center text-base font-bold lg:w-24 lg:border-0 lg:bg-white lg:text-base lg:font-normal"
            >
              <Link
                href={"/c/" + category._id}
                className="flex items-center justify-between px-3 py-5 lg:inline-block lg:border-b-8 lg:border-b-transparent lg:p-0 lg:hover:border-b-secondary lg:hover:font-bold"
              >
                {category.categoryName}
                <div className="inline-block lg:hidden">
                  <Arrow />
                </div>
              </Link>
            </div>
          ))}
          <div className="flex items-center justify-between border-y bg-neutral-100 px-3 py-2 md:hidden">
            <Link href={"/ip"} className="flex items-center gap-3">
              <StoreIcon className="h-5 w-5" />
              <div>
                <p className="text-lg font-bold">Pickup & Delivery</p>
                <p className="text-sm">Order Ahead & Pickup In-Store</p>
              </div>
            </Link>
            <Arrow />
          </div>
          <div className="flex items-center justify-between border-y bg-neutral-100 px-3 py-2 md:hidden">
            <Link href={"/ip"} className="flex items-center gap-3">
              <TiSpanner className="h-6 w-6" />
              <div>
                <p className="text-lg font-bold">Services</p>
                <p className="text-sm">Repair or customize gear</p>
              </div>
            </Link>
            <Arrow />
          </div>
          <div className="flex items-center justify-between border-y bg-neutral-100 px-3 py-4 md:hidden">
            <Link href={"/ip"} className="flex items-center gap-3">
              <FaBox className="h-5 w-5" />
              <p className="text-lg font-bold">Track order</p>
            </Link>
            <Arrow />
          </div>
          <div className="flex items-center justify-between border-y bg-neutral-100 px-3 py-4 md:hidden">
            <Link href={"/ip"} className="flex items-center gap-3">
              <QuestionIcon className="h-6 w-6" />
              <p className="text-lg font-bold">Help</p>
            </Link>
            <Arrow />
          </div>
        </nav>
      </div>
    </BigCenter>
  );
}
