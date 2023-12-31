import Link from "next/link";
import AddToCartBtn from "./addToCartBtn";

export default function ProductBox({ _id, name, price, images }) {
  const url = "/product/" + _id;

  return (
    <div>
      <div className="group flex w-48 flex-col items-center justify-center ">
        <div className="h-full w-full border border-neutral-200 group-hover:shadow-3xl">
          <Link
            href={url}
            className="flex h-56 w-full flex-col items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images?.[0]}
              alt=""
              className="max-h-full max-w-full p-3"
            />
          </Link>
          <h2 className="h-10 px-3 font-bold leading-5 ">
            <div className="line-clamp-2">{name}</div>
          </h2>
          <p className="px-3 font-light">
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
