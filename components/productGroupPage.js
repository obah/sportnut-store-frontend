import WhiteProductBox from "./whiteProductBox";

export default function ProductGroupPage({ products, category }) {
  //TODO Products is an array of products, can be accessed directly. Next step is design this page with filters on the left and "products" on the right. The filters dont need to work cos fuck it

  if (category === "Fan Shop") {
    category = "Fan";
  }

  return (
    <div className="big-center">
      <h1 className="text-center font-semibold text-4xl p-5 border-b border-b-black">
        Shop All {category} Items
      </h1>
      {/* <div className="flex">
        <div className="w-1/4">Hello</div>
        <div className="w-3/4">World</div>
      </div> ---this is for when I have filters*/}
      <div className="bg-neutral-100 px-10 py-10 flex flex-wrap gap-4 justify-center">
        {products.map((product) => (
          <div key={product._id}>
            <WhiteProductBox {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
