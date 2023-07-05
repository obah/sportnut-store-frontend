import Link from "next/link";

export function CategoriesNav({ categories }) {
  return (
    <div className="center border-b">
      <nav className="flex justify-between pt-3 pb-3">
        {categories.map((category) => (
          <div key={category._id} className="w-24 text-center">
            <Link
              href={"/category/" + category._id}
              className=" border-b-8 border-b-transparent hover:font-bold hover:border-b-secondary"
            >
              {category.categoryName}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}