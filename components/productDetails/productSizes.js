function ProductSizes({ selectedSize, handleSizeSelection }) {
  const sizes = ["XS", "S", "M", "L", "XL"];
  const inactiveSize =
    "px-6 md:px-7 py-2 text-center text-sm border hover:cursor-pointer transistion-all duration-300 ease-out";
  const activeSize = inactiveSize + " bg-black text-white font-bold";

  return (
    <div>
      <p className="mb-2 text-sm font-bold">Size:</p>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <div key={size}>
            <p
              onClick={() => handleSizeSelection(size)}
              className={size === selectedSize ? activeSize : inactiveSize}
            >
              {size}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSizes;
