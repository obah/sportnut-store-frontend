import Announcement from "@/components/announcement";
import Featured from "@/components/featured";
import Header from "@/components/header";
import PicturedNav from "@/components/navbar/picturedNav";
import NewProducts from "@/components/newProduct";
import ProductsShowcase from "@/components/productsShowcase";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function Home() {
  const featuredProduct = await getFeaturedProduct();
  const newProducts = await getNewProducts();
  return (
    <div>
      <Header />
      {/*fix this to be the announcement product not featured product*/}
      <Announcement product={featuredProduct.featuredProduct} />
      <Featured product={featuredProduct.featuredProduct} />
      <PicturedNav />
      <ProductsShowcase />
      {/* <NewProducts products={newProducts.newProducts} /> */}
    </div>
  );
}

export async function getFeaturedProduct() {
  const featuredProductId = "64a3d7af819935ebe465cafb";
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
