/* eslint-disable @next/next/no-img-element */
import { blogData } from "@/lib/data";
import Link from "next/link";

export default function MiniBlog({ category, categoryId }) {
  const h2Style =
    "font-extrabold text-center text-2xl -mb-3 md:h-16 lg:h-auto lg:text-left";
  const boxStyle = "flex flex-col items-center justify-center gap-4 ";

  let selectedData = [];
  for (let i = 0; i <= blogData.length - 1; i++) {
    const section = blogData[i];
    let dataKey;
    let key;
    dataKey = Object.keys(section);
    key = dataKey[0];
    if (category === key) {
      selectedData.push(section[key]);
    }
  }
  const sectionData = selectedData[0];

  return (
    <>
      {category !== "Kids" ? (
        category === "Accessories" ? (
          <div>
            <div className="grid grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:gap-10">
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img
                    src={sectionData.firstImg}
                    alt=""
                    className="rounded-md md:h-[400px] lg:h-[700px]"
                  />
                </Link>
                <h2 className={h2Style}>{sectionData.firstTitle}</h2>
                <p className="text-sm">{sectionData.firstText}</p>
                <Link href={"/pp/" + categoryId} className="link-btn">
                  SHOP NOW
                </Link>
              </div>
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img
                    src={sectionData.secondImg}
                    alt=""
                    className="rounded-md md:h-[400px] lg:h-[700px]"
                  />
                </Link>
                <h2 className={h2Style}>{sectionData.secondTitle}</h2>
                <p className="text-sm">{sectionData.secondText}</p>
                <Link href={"/pp/" + categoryId} className="link-btn">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className={boxStyle}>
              <Link href={"/pp/" + categoryId}>
                <img
                  src={sectionData.thirdImg}
                  alt=""
                  className="mt-10 w-screen rounded-md lg:mt-20"
                />
              </Link>
              <h2 className={h2Style}>{sectionData.thirdTitle}</h2>
              <p className="text-sm">{sectionData.thirdText}</p>
              <Link href={"/pp/" + categoryId} className="link-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-10 grid grid-cols-1 gap-6 px-6 md:grid-cols-3 lg:gap-10 lg:px-10">
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img
                    src={sectionData.firstImg}
                    alt=""
                    className="rounded-md"
                  />
                </Link>
                <h2 className={h2Style}>{sectionData.firstTitle}</h2>
                <p className="h-8 text-sm md:text-xs lg:text-sm">
                  {sectionData.firstText}
                </p>
                <Link href={"/pp/" + categoryId} className="link-btn">
                  SHOP NOW
                </Link>
              </div>
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img
                    src={sectionData.secondImg}
                    alt=""
                    className="rounded-md"
                  />
                </Link>
                <h2 className={h2Style}>{sectionData.secondTitle}</h2>
                <p className="h-8 text-sm md:text-xs lg:text-sm">
                  {sectionData.secondText}
                </p>
                <Link href={"/pp/" + categoryId} className="link-btn">
                  SHOP NOW
                </Link>
              </div>
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img
                    src={sectionData.thirdImg}
                    alt=""
                    className="rounded-md"
                  />
                </Link>
                <h2 className={h2Style}>{sectionData.thirdTitle}</h2>
                <p className="h-8 text-sm md:text-xs lg:text-sm">
                  {sectionData.thirdText}
                </p>
                <Link href={"/pp/" + categoryId} className="link-btn">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className={boxStyle}>
              <Link href={"/pp/" + categoryId}>
                <img
                  src={sectionData.fourthImg}
                  alt=""
                  className="rounded-md lg:mt-12"
                />
              </Link>
              <h2 className={h2Style}>{sectionData.fourthTitle}</h2>
              <p className="text-sm">{sectionData.fourthText}</p>
              <Link href={"/pp/" + categoryId} className="link-btn">
                SHOP NOW
              </Link>
            </div>
          </div>
        )
      ) : (
        ""
      )}
    </>
  );
}
