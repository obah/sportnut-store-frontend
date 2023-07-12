import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import { Category } from "@/models/Category";
import ProductGroupPage from "@/components/productGroupPage";

export default async function Page({ params }) {
  const categoryId = params.id;

  const allProductsDoc = await getAllProducts();
  const allProducts = allProductsDoc.allProducts;

  const categoriesDoc = await getCategories();
  const allCategories = categoriesDoc.categories;

  const subCategories = allCategories
    .filter((category) => category.parentCategory)
    .filter((category) => category.parentCategory === categoryId);

  const products = []; //these are the products in this parent category

  for (const category of subCategories) {
    const catProducts = allProducts.filter(
      (product) => product.productCategory === category._id
    );
    for (const product of catProducts) {
      products.push(product);
    }
  }

  const thisCategory = allCategories
    .filter((category) => category._id === categoryId)
    .at(0);
  console.log();

  return (
    <>
      <ProductGroupPage
        products={products}
        category={thisCategory.categoryName}
      />
    </>
  );
}

export async function getAllProducts() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null);
  return {
    allProducts: JSON.parse(JSON.stringify(allProducts)),
  };
}

export async function getCategories() {
  await mongooseConnect();
  const categories = await Category.find({}, null);
  return { categories: JSON.parse(JSON.stringify(categories)) };
}
