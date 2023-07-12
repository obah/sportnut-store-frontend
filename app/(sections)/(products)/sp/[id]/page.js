import { Product } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";
import ProductGroupPage from "@/components/productGroupPage";
import { Category } from "@/models/Category";

export default async function Page({ params }) {
  const categoryId = params.id;

  const allProductsDoc = await getAllProducts();
  const allProducts = allProductsDoc.allProducts;

  const catProducts = allProducts.filter(
    (product) => product.productCategory === categoryId
  ); //these are the products for this category

  const categoryDoc = await getCategory(categoryId);
  const category = categoryDoc.category;

  return (
    <>
      <ProductGroupPage
        products={catProducts}
        category={category.categoryName}
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

export async function getCategory(catId) {
  await mongooseConnect();
  const category = await Category.findById(catId);
  return { category: JSON.parse(JSON.stringify(category)) };
}
