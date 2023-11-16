import { FaCircleExclamation } from "react-icons/fa6";
import { DeleteIcon, TickIcon } from "@/components/icons";

function ItemDetails({
  cartIds,
  products,
  removeIdFromCart,
  removeItem,
  addItem,
}) {
  return (
    <>
      {products.map((product) => (
        <div
          key={product._id}
          className="relative mb-4 flex flex-col bg-white p-4 md:static md:flex-row"
        >
          <div className="flex h-40 w-40 items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.images[0]}
              alt=""
              className="max-h-full max-w-full p-3"
            />
          </div>
          <div className="w-full px-5 md:w-80 md:border-r">
            <p className="mb-1">{product.name}</p>
            <p className="mb-4 font-bold">
              {product.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <div className="relative z-0 mb-4 flex w-36 items-center justify-between border px-3 py-1 text-center md:mb-0">
              <p className="absolute -top-3 left-12 z-10 bg-white px-1 text-neutral-400">
                Qty
              </p>
              <button
                onClick={() => removeItem(product._id)}
                className={
                  "rounded bg-white px-1 text-4xl font-extralight text-black hover:bg-slate-200"
                }
              >
                -
              </button>
              <span className="px-3 text-xl font-semibold">
                {cartIds.filter((id) => id === product._id).length}
              </span>
              <button
                onClick={() => addItem(product._id)}
                className={
                  "rounded bg-white px-1 text-4xl font-extralight text-black hover:bg-slate-200"
                }
              >
                +
              </button>
            </div>
          </div>
          <div className="w-full text-sm md:w-80 md:pl-8">
            <div className="mb-5 flex items-center">
              <input
                type="radio"
                name={product.name}
                value="available"
                checked
                readOnly
                className="h-5 w-5"
              />
              <label
                htmlFor={product.name}
                className="ml-1 inline-flex items-center gap-1 font-semibold"
              >
                <TickIcon className="inline h-4 w-4" /> Available to Ship
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                name={product.name}
                value="unavailable"
                disabled
                className="h-5 w-5"
              />
              <label
                htmlFor={product.name}
                disabled
                className="ml-1 inline-flex items-center gap-1 text-neutral-500"
              >
                <FaCircleExclamation className="inline h-[13px] w-[13px] text-red-500" />
                Not available for Store Pickup
              </label>
            </div>
          </div>
          <div
            onClick={() => removeIdFromCart(product._id)}
            className="absolute left-64 ml-12 hover:cursor-pointer md:static"
          >
            <DeleteIcon />
          </div>
        </div>
      ))}
    </>
  );
}

export default ItemDetails;
