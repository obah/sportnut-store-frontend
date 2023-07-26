import Announcement from "@/components/homepage/announcement";
import Featured from "@/components/homepage/featured";
import Header from "@/components/header";
import PicturedNav from "@/components/navbar/picturedNav";
import NewProducts from "@/components/homepage/newProduct";
import ProductsShowcase from "@/components/homepage/productsShowcase";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import FinalOffers from "@/components/homepage/finalOffers";
import Footer from "@/components/footer";

export default async function Home() {
  const announcementProduct = await getAnnouncementProduct();
  const allProductsdata = await getAllProducts();
  const allProducts = allProductsdata.allProducts;

  const getRandomProduct = () => {
    const randomProduct =
      allProducts[Math.floor(Math.random() * allProducts.length)];
    return randomProduct;
  };

  const getHotProducts = () => {
    let hotProductsData = [];
    for (let i = 0; i <= 5; i++) {
      const product = getRandomProduct();
      if (!hotProductsData.includes(product)) {
        hotProductsData.push(product);
      }
    }
    return hotProductsData;
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

  const getPromoProducts = () => {
    let promoProductsData = [];
    for (let i = 0; i <= 7; i++) {
      const product = getRandomProduct();
      if (!promoProductsData.includes(product)) {
        promoProductsData.push(product);
      }
    }
    return promoProductsData;
  };

  const hotProducts = getHotProducts();
  const recommendedProducts = getRecommendedProducts();
  const promoProducts = getPromoProducts();

  return (
    <>
      <Header />
      <main>
        <Announcement product={announcementProduct.announcementProduct} />
        <Featured />
        <PicturedNav />
        <ProductsShowcase
          hotProductsData={hotProducts}
          recommendedProductsData={recommendedProducts}
        />
        <NewProducts />
        <FinalOffers products={promoProducts} />
      </main>
      <Footer />
    </>
  );
}

export async function getAnnouncementProduct() {
  const announcementProductId = "64a52d16d5b0f02785afc500";
  await mongooseConnect();
  const announcementProduct = await Product.findById(announcementProductId);
  return {
    announcementProduct: JSON.parse(JSON.stringify(announcementProduct)),
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

export async function getAllProducts() {
  await mongooseConnect();
  const allProducts = await Product.find({}, null);
  return {
    allProducts: JSON.parse(JSON.stringify(allProducts)),
  };
}
