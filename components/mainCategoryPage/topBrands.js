import Link from "next/link";
import AlphabetMenu from "./alphabetMenu";

function TopBrands() {
  const nikeId = "64a331eba7a4adbcb9ca3d36";
  const adidasId = "64a331f6a7a4adbcb9ca3d3a";

  const brandStyle = "underline font-semibold hover:cursor-pointer";

  return (
    <div className="mx-auto w-full px-2 md:w-[750px] md:px-0 lg:w-[960px]">
      <h1 className="border-b py-8 text-center text-2xl font-bold lg:py-10 lg:text-4xl">
        SHOP ALL BRANDS
      </h1>
      <h3 className="py-4 text-center text-xl font-semibold lg:text-2xl">
        Est. 2022
      </h3>
      <p className="mb-10 mt-3 text-sm md:mb-16 lg:text-base">
        SportNut Store is proud to offer high-quality sporting goods equipment
        and gear from the top brands you trust. Since 2022, SportNut Store has
        brought you the brands that make you untouchable on the field, on the
        court and anywhere else you play your sport. Now you can easily find the
        brands from our stores on our Web site. From our collection of apparel
        and footwear from <span className={brandStyle}>The North Face</span>,{" "}
        <span className={brandStyle}>Nike</span> and{" "}
        <span className={brandStyle}>Under Armour</span>, to our premium
        equipment from <span className={brandStyle}>TaylorMade</span>,{" "}
        <span className={brandStyle}>Field & Stream</span> and{" "}
        <span className={brandStyle}>DeMarini</span>, you’ll find all the best
        brands and gear right here.
      </p>

      <AlphabetMenu />

      <div className="border border-neutral-500">
        <div className="border border-neutral-500">
          <h3 className="border border-neutral-500 px-4 py-2 text-base font-semibold lg:text-lg">
            A
          </h3>
          <div>
            <ul className="list-inside list-disc border marker:text-black">
              <li className="px-4 py-3 text-primary">
                <Link href={"/sp/" + adidasId}>Adidas</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-neutral-500">
          <h3 className="border border-neutral-500 px-4 py-2 text-base font-semibold lg:text-lg">
            N
          </h3>
          <div>
            <ul className="list-inside list-disc border marker:text-black">
              <li className="px-4 py-3 text-primary">
                <Link href={"/sp/" + nikeId}>Nike</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="my-10 text-center">
        <h3 className="text-2xl font-extrabold text-primary md:text-3xl">
          More of your favorite brands coming soon...
        </h3>
      </div>
    </div>
  );
}

export default TopBrands;
