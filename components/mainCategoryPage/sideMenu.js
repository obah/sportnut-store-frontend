import Link from "next/link";
import { Arrow } from "../icons";

function SideMenu({ subCategory, tagline }) {
  return (
    <div className="order-last -mb-1 w-full lg:order-none lg:w-1/4">
      <h2 className="border-b px-4 py-5 text-center text-2xl font-semibold md:py-8 lg:text-left">
        {tagline}
      </h2>
      <div className="bg-neutral-200 lg:bg-white">
        {subCategory.map((category) => (
          <div key={category._id} className="px-0 lg:px-2">
            <Link
              href={"/sp/" + category._id}
              className="mb-1 flex h-16 items-center justify-between rounded-sm border-b border-l-4 border-b-neutral-400 border-l-transparent bg-white px-5   hover:border-r hover:border-t hover:border-l-secondary hover:font-semibold hover:shadow-md lg:mb-0 lg:h-20 lg:px-2"
            >
              <div className="flex items-center gap-4">
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img src={category.image} alt="" className="h-14" />
                {category.categoryName}
              </div>
              <Arrow />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideMenu;
