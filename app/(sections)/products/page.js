import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import ProductBox from "@/components/productBox";
import { Center } from "@/components/viewPorts";

export default async function Page() {
  const allProducts = await getAllProducts();
  const products = allProducts.allProducts;
  return (
    <Center>
      <h2 className="mt-5 text-3xl font-bold sm:text-5xl">All Products</h2>
      <div className="grid grid-cols-2 gap-5 pt-7 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5">
        {products?.length > 0 &&
          products.map((product) => (
            <div key={product._id}>
              <ProductBox {...product} />
            </div>
          ))}
      </div>
    </Center>
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
