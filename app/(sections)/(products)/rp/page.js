import MiniProductBox from "@/components/miniProductBox";
import { BigCenter } from "@/components/viewPorts";
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
    <BigCenter>
      <h1 className="py-8 text-center text-2xl font-semibold lg:py-10 lg:text-4xl">
        RECOMMENDED FOR YOU
      </h1>
      <div className="mb-8 bg-primary py-10 text-center text-white md:py-16 lg:py-28">
        <h2 className="text-3xl font-semibold md:text-5xl lg:text-8xl">
          PICKED JUST FOR YOU
        </h2>
        <p className="text-xs font-normal md:text-xl lg:text-4xl">
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
    </BigCenter>
  );
}

export function ProductGroup({ title, productsData }) {
  return (
    <div className="mb-12 px-2 md:mb-16 md:px-4 lg:mb-20 lg:px-8">
      <h3 className="mb-2 text-center text-sm font-extrabold md:text-lg">
        {title}
      </h3>
      <div className="flex justify-center gap-2 overflow-x-scroll bg-neutral-100 px-20 py-3">
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
