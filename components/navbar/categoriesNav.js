import Link from "next/link";
import { Arrow } from "../icons";

export function CategoriesNav({ categories, menu }) {
  return (
    <div className="big-center md:center border-t md:border-y ">
      <nav className="z-10 flex w-4/5 flex-col md:z-0 md:w-full md:flex-row md:justify-between md:pt-3">
        {categories.map((category) => (
          <div
            key={category._id}
            className="w-full border bg-neutral-100 text-center text-lg font-bold md:w-24 md:border-0 md:bg-white md:text-base md:font-normal"
          >
            <Link
              href={"/c/" + category._id}
              className="flex items-center justify-between px-2 py-4 md:inline-block md:border-b-8 md:border-b-transparent md:p-0 md:hover:border-b-secondary md:hover:font-bold"
            >
              {category.categoryName}
              <div className="inline-block md:hidden">
                <Arrow />
              </div>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
