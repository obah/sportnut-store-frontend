import Link from "next/link";
import AddToCartBtn from "./addToCartBtn";

export default function ProductBox({ _id, name, price, images }) {
  const url = "/product/" + _id;

  return (
    <div>
      <div className="group flex flex-col justify-center items-center w-48 ">
        <div className="border border-neutral-200 group-hover:shadow-3xl w-48 h-full">
          <Link
            href={url}
            className="flex flex-col justify-center items-center w-48 h-56"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images?.[0]} alt="" className="max-w-full max-h-44" />
            {/* <img src={images?.[0]} alt="" className="max-w-full max-h-44" /> */}
          </Link>
          <h2 className="font-bold px-3 h-10 leading-4 ">
            <div className="line-clamp-2">{name}</div>
          </h2>
          <p className="font-light px-3">
            {price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </p>
        </div>

        <AddToCartBtn className={"secondary-btn w-full py-2"} id={_id} />
      </div>
    </div>
  );
}
