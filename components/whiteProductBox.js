import Link from "next/link";
import { AddToCartBtn2 } from "./addToCartBtn";

export default function WhiteProductBox({ _id, name, price, images }) {
  const url = "/product/" + _id;

  return (
    <div>
      <div className="group flex flex-col items-center justify-center bg-white">
        <div className="w-44 border border-neutral-200 border-b-black group-hover:shadow-xl md:w-56 lg:w-72">
          
          <Link
            href={url}
            className="flex h-40 w-full flex-col items-center justify-center md:h-48 lg:h-56"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images?.[0]}
              alt=""
              className="max-h-full max-w-full px-2 pt-2"
            />
          </Link>

          <Link href={url}>
            <h2 className="h-16 px-3 py-5 font-bold leading-5">
              <div className="line-clamp-2">{name}</div>
            </h2>

            <p className="mb-2 px-3 py-3 font-semibold">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </Link>
        </div>
        <AddToCartBtn2 className={"w-full bg-white py-3 font-bold"} id={_id} />
      </div>
    </div>
  );
}
