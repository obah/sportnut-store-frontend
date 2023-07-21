import Link from "next/link";

export default function MiniProductBox({ _id, name, price, images }) {
  const url = "/product/" + _id;

  return (
    <div>
      <div className="group w-52 bg-white ">
        <div className="h-full w-52 border border-neutral-200 group-hover:shadow-3xl group-hover:shadow-black">
          <Link
            href={url}
            className="flex h-56 w-52 flex-col items-center justify-center"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images?.[0]} alt="" className="max-h-44 max-w-full" />
            {/* <img src={images?.[0]} alt="" className="max-w-full max-h-44" /> */}
          </Link>
          <Link href={url}>
            <h2 className="h-10 px-3 font-bold leading-4 ">
              <div className="line-clamp-2">{name}</div>
            </h2>
            <p className="my-2 px-3 text-sm font-light">
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
