import MiniProductBox from "@/components/miniProductBox";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default async function Page() {
  const allProductsdata = await getAllProducts();
  const allProducts = allProductsdata.allProducts;

  const getRandomProduct = () => {
    const randomProduct =
      allProducts[Math.floor(Math.random() * allProducts.length)];
    return randomProduct;
  };

  const getRecommendedProducts = () => {
    let recommendedProductsData = [];
    for (let i = 0; i <= 5; i++) {
      const product = getRandomProduct();
      if (!recommendedProductsData.includes(product)) {
        recommendedProductsData.push(product);
      }
    }
    return recommendedProductsData;
  };

  const recommendedProducts1 = getRecommendedProducts();
  const recommendedProducts2 = getRecommendedProducts();
  const recommendedProducts3 = getRecommendedProducts();
  const recommendedProducts4 = getRecommendedProducts();
  const recommendedProducts5 = getRecommendedProducts();

  return (
    <div className="big-center">
      <h1 className="py-10 text-center text-4xl font-semibold">
        RECOMMENDED FOR YOU
      </h1>
      <div className="mb-8 bg-primary py-28 text-center text-white">
        <h2 className="text-8xl font-semibold">PICKED JUST FOR YOU</h2>
        <p className="text-4xl font-normal">
          THE MORE YOU SHOP, THE BETTER OUR RECOMMENDATIONS ARE!
        </p>
      </div>
      <div>
        <ProductGroup
          title={"TOP PICKS FOR YOU"}
          productsData={recommendedProducts1}
        />
        <ProductGroup
          title={"TOP-SELLING PRODUCTS YOU MIGHT LIKE"}
          productsData={recommendedProducts2}
        />
        <ProductGroup
          title={"SHOP YOUR FAVORITE BRANDS"}
          productsData={recommendedProducts3}
        />
        <ProductGroup
          title={"READY FOR CURBSIDE PICKUP AT YOUR STORE"}
          productsData={recommendedProducts4}
        />
        <ProductGroup
          title={"TOP-SELLING PRODUCTS IN YOUR AREA"}
          productsData={recommendedProducts5}
        />
      </div>
    </div>
  );
}

export function ProductGroup({ title, productsData }) {
  return (
    <div className="mb-20 px-8">
      <h3 className="mb-2 text-center text-lg font-extrabold">{title}</h3>
      <div className="flex justify-center gap-2 bg-neutral-100 px-20 py-3">
        {productsData.map((product) => (
          <div key={product._id}>
            <MiniProductBox {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getAllProducts() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null);
  return {
    allProducts: JSON.parse(JSON.stringify(allProducts)),
  };
}
