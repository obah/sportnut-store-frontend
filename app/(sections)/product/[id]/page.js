import ProductPage from "@/components/productPage";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function Page({ params }) {
  const productId = params.id;
  const productData = await getProduct(productId);
  const product = productData.product;

  return (
    <div className="center">
      <ProductPage product={product} />
    </div>
  );
}

export async function getProduct(productId) {
  await mongooseConnect();
  const product = await Product.findById(productId);
  return { product: JSON.parse(JSON.stringify(product)) };
}
