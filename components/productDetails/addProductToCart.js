function AddProductToCart({ handleItemCount, addToCart, currentCount }) {
  return (
    <div className="mt-10 pr-2">
      <input
        type="number"
        value={currentCount}
        onChange={(e) => {
          handleItemCount(e.target.value);
        }}
        className="w-1/4 border border-black py-4 text-center font-bold focus:outline-dashed focus:outline-offset-4 focus:outline-primary md:py-6 lg:w-1/3"
      />

      <button
        onClick={() => addToCart()}
        className="secondary-btn w-3/4 py-4 text-center md:py-6 lg:w-2/3"
      >
        Add to cart
      </button>
    </div>
  );
}

export default AddProductToCart;
