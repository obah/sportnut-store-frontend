import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductBox from "@/components/productBox";

export default async function Page() {
  const allProducts = await getAllProducts();
  const products = allProducts.allProducts;
  return (
    <div className="center">
      <h2 className="mt-5 font-bold text-5xl">All Products</h2>
      <div className="grid grid-cols-5 gap-3 pt-7">
        {products?.length > 0 &&
          products.map((product) => (
            <div key={product._id}>
              <ProductBox {...product} />
            </div>
          ))}
      </div>
    </div>
  );
}

export async function getAllProducts() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null, {
    sort: { _id: -1 },
  });
  return {
    allProducts: JSON.parse(JSON.stringify(allProducts)),
  };
}
