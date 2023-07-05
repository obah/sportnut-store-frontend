import Link from "next/link";
import ProductBox from "../productBox";

export default function ProductsShowcase({
  hotProductsData,
  recommendedProductsData,
}) {
  const gridBox = "flex justify-between gap-5 px-3 overflow-x-scroll";

  return (
    <div className="center">
      <div className="grid grid-cols-2 gap-6 px-8 mt-14">
        <div>
          <GridTitle title={"Hot In Your Area"} />
          <div className={gridBox}>
            {hotProductsData.map((product) => (
              <div key={product._id}>
                <ProductBox {...product} />
              </div>
            ))}
          </div>
        </div>
        <div>
          <GridTitle title={"Recommended For You"} />
          <div className={gridBox}>
            {recommendedProductsData.map((product) => (
              <div key={product._id}>
                <ProductBox {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GridTitle({ title }) {
  return (
    <div>
      <div className="flex gap-2 justify-between ">
        <h2 className=" text-sm font-bold">{title}</h2>
        <Link href={"/products"} className=" text-xs font-semibold underline ">
          View All
        </Link>
      </div>
      <div className="border-b border-black w-full mb-6"></div>
    </div>
  );
}
