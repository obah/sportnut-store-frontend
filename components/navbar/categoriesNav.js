import Link from "next/link";

export function CategoriesNav({ categories }) {
  return (
    <div className="center border-b border-t">
      <nav className="flex justify-between pb-3 pt-3">
        {categories.map((category) => (
          <div key={category._id} className="w-24 text-center">
            <Link
              href={"/c/" + category._id}
              className=" border-b-8 border-b-transparent hover:border-b-secondary hover:font-bold"
            >
              {category.categoryName}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
