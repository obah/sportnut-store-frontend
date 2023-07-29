import Link from "next/link";

export default function MiniProductBox({ _id, name, price, images }) {
  const url = "/product/" + _id;

  return (
    <div>
      <div className="group w-40 bg-white lg:w-52">
        <div className="h-full w-full border border-neutral-200 group-hover:shadow-3xl group-hover:shadow-black">
          <Link
            href={url}
            className="flex h-44 w-full flex-col items-center justify-center lg:h-56"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images?.[0]}
              alt=""
              className="max-h-full max-w-full p-3"
            />
            {/* <img src={images?.[0]} alt="" className="max-w-full max-h-44" /> */}
          </Link>
          <Link href={url}>
            <h2 className="h-10 px-3 font-bold ">
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
