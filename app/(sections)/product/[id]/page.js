import ProductPage from "@/components/productPage";
import { BigCenter } from "@/components/viewPorts";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function Page({ params }) {
  const productId = params.id;
  const productData = await getProduct(productId);
  const product = productData.product;

  return (
      <BigCenter>
      <ProductPage product={product} />
      </BigCenter>
  );
}

export async function getProduct(productId) {
  await mongooseConnect();
  const product = await Product.findById(productId);
  return { product: JSON.parse(JSON.stringify(product)) };
}
