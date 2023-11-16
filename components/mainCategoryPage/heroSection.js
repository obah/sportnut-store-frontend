/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function HeroSection({ mainImage, imageAlt, mainText, content, pageId }) {
  return (
    <div className="relative w-full lg:w-3/4">
      <img src={mainImage} alt={imageAlt} className="rounded-md object-cover" />
      <div className="absolute left-4 top-0 flex h-full w-1/2 flex-col justify-center gap-3 text-white md:left-14 md:top-24 lg:top-0">
        <h1 className="text-3xl font-black shadow-black [text-shadow:0_4px_8px_var(--tw-shadow-color)] md:text-6xl">
          {mainText}
        </h1>
        <p className="text-sm font-bold shadow-black [text-shadow:0_4px_8px_var(--tw-shadow-color)] md:text-lg">
          {content}
        </p>
        <Link
          href={"/pp/" + pageId}
          className="primary-btn w-2/3 py-3 text-center md:w-1/3"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
