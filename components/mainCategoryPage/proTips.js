import Link from "next/link";
import Image from "next/image";

function ProTips({ tipsData }) {
  return (
    <div className="mt-10 lg:mt-20">
      <h2 className="mb-6 text-center text-3xl font-black md:text-4xl lg:text-5xl">
        <span className="text-primary">{`SPORTNUT'S `}</span>PRO TIPS
      </h2>
      <div className="grid grid-cols-1 gap-6 px-10 md:grid-cols-2 lg:flex lg:px-6">
        {tipsData.map((tip) => (
          <div key={tip.id} className="w-full border text-center lg:w-1/4">
            <Link href={"/ip"}>
              <Image
                src={tip.image}
                alt={tip.imageAlt}
                className="mb-3 w-full"
              />
              <h3 className="p-3 pb-1 font-bold">{tip.title}</h3>
              <div className="mx-auto w-10 border-t border-t-secondary pb-3"></div>
              <p className="px-3 pb-9 pt-0 text-sm">
                <span className="line-clamp-3 ">{tip.text}</span>
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProTips;
