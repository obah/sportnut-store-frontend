function CheckoutProducts({ products, cartProducts }) {
  return (
    <>
      {products?.map((product) => (
        <>
          <h2 className="mt-8 font-bold text-primary">Store Pickup</h2>
          <div
            key={product._id}
            className="flex items-center gap-3 border-b border-b-black p-10 pt-0 last-of-type:border-b-0 lg:gap-2"
          >
            <div className="flex h-32 w-32 items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={product.images[0]} alt="" className="h-20 w-20" />
            </div>
            <div>
              <p className="mb-1">{product.name}</p>
              <p className="mb-1 font-semibold">
                {product.price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
              <p className="mb-1 text-sm">
                Qty: {cartProducts.filter((id) => id === product._id).length}
              </p>
            </div>
          </div>
        </>
      ))}
    </>
  );
}

export default CheckoutProducts;
