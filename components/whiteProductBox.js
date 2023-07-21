import Link from "next/link";
import { AddToCartBtn2 } from "./addToCartBtn";

export default function WhiteProductBox({ _id, name, price, images }) {
  const url = "/product/" + _id;

  return (
    <div>
      <div className="group flex flex-col items-center justify-center bg-white">
        <div className="w-72 border border-neutral-200 border-b-black group-hover:shadow-xl">
          <Link
            href={url}
            className="flex h-56 w-72 flex-col items-center justify-center px-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images?.[0]} alt="" className="max-h-44 max-w-full" />
            {/* <img src={images?.[0]} alt="" className="max-w-full max-h-44" /> */}
          </Link>
          <Link href={url}>
            <h2 className="h-16 px-3 py-5 font-bold leading-5">
              <div className="line-clamp-2">{name}</div>
            </h2>
            <p className="text-md mb-2 px-3 py-3 font-semibold">
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
