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

  //next step now is to design this page and have a condition to determine the content to use based on the category id or name
  return (
    <div>
      <MainCategoryPage
        mainCategory={parentCategory}
        subCategory={subCategories}
      />
      {/*
      <h1>
        This is the parent category page. Display the subcategories by the, then
        the images and content just like the main site
      </h1>
      <>
        This will get the parent category, then check the categories that have
        it as a parent...filter. Then for each subcategory, find all the
        products in it..filter also, and send either the ids or the products
        themselves to the subcategories page
      </>
      */}
    </div>
  );
}

export async function getCategories() {
  await mongooseConnect();
  const categories = await Category.find({}, null);
  return { categories: JSON.parse(JSON.stringify(categories)) };
}

//use this when the categories have more information
// export async function getParentCategory(categoryId) {
//   await mongooseConnect();
//   const category = await Category.findById(categoryId);
//   return { category: JSON.parse(JSON.stringify(category)) };
// }
