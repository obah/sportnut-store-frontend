import Link from "next/link";

export function CategoriesNav({ categories }) {
  return (
    <div className="center border-b">
      <div className="flex justify-between pt-3 pb-2">
        {categories.map((category) => (
          <nav key={category._id}>
            <Link
              href={"/category/" + category._id}
              className="hover:font-bold hover:border-b-8 hover:border-b-secondary"
            >
              {category.categoryName}
            </Link>
          </nav>
        ))}
      </div>
    </div>
  );
}
