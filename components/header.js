import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import Menu from "./menu";

export default async function Header() {
  const categoriesDoc = await getCategories();
  const allCategories = categoriesDoc.categories;
  let parentCategories = [];
  let parentCategoriesData = [];

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

  return (
    <header>
      <Menu categories={parentCategoriesData} />
    </header>
  );
}

export async function getCategories() {
  await mongooseConnect();
  const categories = await Category.find({}, null);
  return { categories: JSON.parse(JSON.stringify(categories)) };
}
