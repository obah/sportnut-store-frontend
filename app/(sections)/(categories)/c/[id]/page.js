import MainCategoryPage from "@/components/mainCategoryPage";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";

export default async function Page({ params }) {
  const categoryId = params.id;
  const categoriesDoc = await getCategories();
  const allCategories = categoriesDoc.categories;

  const subCategories = allCategories
    .filter((category) => category.parentCategory)
    .filter((category) => category.parentCategory === categoryId);

  const parentCategory = allCategories
    .filter((category) => category._id === categoryId)
    .at(0);

  return (
    <div>
      <MainCategoryPage
        mainCategory={parentCategory}
        subCategory={subCategories}
      />
    </div>
  );
}

export async function getCategories() {
  await mongooseConnect();
  const categories = await Category.find({}, null);
  return { categories: JSON.parse(JSON.stringify(categories)) };
}
