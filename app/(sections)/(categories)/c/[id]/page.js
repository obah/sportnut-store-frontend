import MainCategoryPage from "@/components/mainCategoryPage";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import { Product } from "@/models/Product";

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

  const allProductsDoc = await getAllProducts();
  const allProducts = allProductsDoc.allProducts;
  const productIds = []; //these are the products in this parent category

  for (const category of subCategories) {
    const catProducts = allProducts.filter(
      (product) => product.productCategory === category._id
    );
    for (const product of catProducts) {
      productIds.push(product._id);
    }
  }

  return (
    <div>
      <MainCategoryPage
        mainCategory={parentCategory}
        subCategory={subCategories}
        products={productIds}
      />
    </div>
  );
}

export async function getCategories() {
  await mongooseConnect();
  const categories = await Category.find({}, null);
  return { categories: JSON.parse(JSON.stringify(categories)) };
}

//TODO remove this and the serving functions after you finish the products page
export async function getAllProducts() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null);
  return {
    allProducts: JSON.parse(JSON.stringify(allProducts)),
  };
}
