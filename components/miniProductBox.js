import Link from "next/link";

export default function MiniProductBox({ _id, name, price, images }) {
  const url = "/product/" + _id;

  return (
    <div>
      <div className="group bg-white w-52 ">
        <div className="border border-neutral-200 group-hover:shadow-3xl group-hover:shadow-black w-52 h-full">
          <Link
            href={url}
            className="flex flex-col justify-center items-center w-52 h-56"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images?.[0]} alt="" className="max-w-full max-h-44" />
            {/* <img src={images?.[0]} alt="" className="max-w-full max-h-44" /> */}
          </Link>
          <Link href={url}>
            <h2 className="font-bold px-3 h-10 leading-4 ">
              <div className="line-clamp-2">{name}</div>
            </h2>
            <p className="font-light text-sm px-3 my-2">
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
