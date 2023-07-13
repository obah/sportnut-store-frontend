import Link from "next/link";
import { AddToCartBtn2 } from "./addToCartBtn";

export default function WhiteProductBox({ _id, name, price, images }) {
  const url = "/product/" + _id;

  return (
    <div>
      <div className="group bg-white flex flex-col justify-center items-center">
        <div className="border border-neutral-200 border-b-black group-hover:shadow-xl w-72">
          <Link
            href={url}
            className="flex flex-col justify-center items-center w-72 h-56 px-2"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images?.[0]} alt="" className="max-w-full max-h-44" />
            {/* <img src={images?.[0]} alt="" className="max-w-full max-h-44" /> */}
          </Link>
          <Link href={url}>
            <h2 className="font-bold px-3 py-5 h-16 leading-5">
              <div className="line-clamp-2">{name}</div>
            </h2>
            <p className="font-semibold text-md px-3 py-3 mb-2">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </Link>
        </div>
        <AddToCartBtn2 className={"font-bold bg-white w-full py-3"} id={_id} />
      </div>
    </div>
  );
}
