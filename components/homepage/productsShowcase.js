import Link from "next/link";
import ProductBox from "../productBox";
import { Center } from "../viewPorts";

export default function ProductsShowcase({
  hotProductsData,
  recommendedProductsData,
}) {
  const gridBox = "flex justify-between gap-5 px-3 overflow-x-scroll";

  return (
    <Center>
      <div className="mt-14 grid grid-cols-2 gap-6 px-8">
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
    </Center>
  );
}

export function GridTitle({ title }) {
  return (
    <div>
      <div className="flex justify-between gap-2 ">
        <h2 className=" text-sm font-bold">{title}</h2>
        <Link href={"/rp"} className=" text-xs font-semibold underline ">
          View All
        </Link>
      </div>
      <div className="mb-6 w-full border-b border-black"></div>
    </div>
  );
}
