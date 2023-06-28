import Featured from "@/components/featured";
import Header from "@/components/header";
import NewProducts from "@/components/newProduct";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function Home() {
  const featuredProduct = await getFeaturedProduct();
  const newProducts = await getNewProducts();
  return (
    <div>
      <Header />
      <Featured product={featuredProduct.featuredProduct} />
      <NewProducts products={newProducts.newProducts} />
    </div>
  );
}

export async function getFeaturedProduct() {
  const featuredProductId = "6488825b4562d3944c811334";
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);
  return {
    featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
  };
}

export async function getNewProducts() {
  await mongooseConnect();
  const newProducts = await Product.find({}, null, {
    sort: { _id: -1 },
    limit: 6,
  });
  return {
    newProducts: JSON.parse(JSON.stringify(newProducts)),
  };
}
