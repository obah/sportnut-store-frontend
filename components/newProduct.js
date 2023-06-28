import ProductBox from "./productBox";

export default function NewProducts({ products }) {
  return (
    <div className="center">
      <h2 className="mt-5 font-bold text-5xl">New Arrivals</h2>
      <div className="grid grid-cols-3 gap-7 pt-7">
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