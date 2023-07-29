import { BigCenter } from "./viewPorts";
import WhiteProductBox from "./whiteProductBox";

export default function ProductGroupPage({ products, category }) {
  if (category === "Fan Shop") {
    category = "Fan";
  }

  return (
    <BigCenter>
      <h1 className="border-b border-b-black p-3 text-center text-2xl font-semibold md:p-5 md:text-4xl">
        Shop All {category} Items
      </h1>
      <div className="flex flex-wrap justify-center gap-4 bg-neutral-100 px-0 py-4 md:p-10">
        {products.map((product) => (
          <div key={product._id}>
            <WhiteProductBox {...product} />
          </div>
        ))}
      </div>
    </BigCenter>
  );
}
