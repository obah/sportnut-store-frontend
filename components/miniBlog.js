/* eslint-disable @next/next/no-img-element */
import { blogData } from "@/lib/data";
import Link from "next/link";

export default function MiniBlog({ category }) {
  const data = blogData;
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
            <div className="grid grid-cols-2 px-6">
              <div>
                <img src={sectionData.firstImg} alt="" />
                <h2>{sectionData.firstTitle}</h2>
                <p>{sectionData.firstText}</p>
                <Link href={"/"}>SHOP NOW</Link>
              </div>
              <div>
                <img src={sectionData.secondImg} alt="" />
                <h2>{sectionData.secondTitle}</h2>
                <p>{sectionData.secondText}</p>
                <Link href={"/"}>SHOP NOW</Link>
              </div>
            </div>
            <div>
              <img src={sectionData.thirdImg} alt="" />
              <h2>{sectionData.thirdTitle}</h2>
              <p>{sectionData.thirdText}</p>
              <Link href={"/"}>SHOP NOW</Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-3 gap-8 mb-10">
              <div>
                <img src={sectionData.firstImg} alt="" />
                <h2>{sectionData.firstTitle}</h2>
                <p>{sectionData.firstText}</p>
                <Link href={"/"}>SHOP NOW</Link>
              </div>
              <div>
                <img src={sectionData.secondImg} alt="" />
                <h2>{sectionData.secondTitle}</h2>
                <p>{sectionData.secondText}</p>
                <Link href={"/"}>SHOP NOW</Link>
              </div>
              <div>
                <img src={sectionData.thirdImg} alt="" />
                <h2>{sectionData.thirdTitle}</h2>
                <p>{sectionData.thirdText}</p>
                <Link href={"/"}>SHOP NOW</Link>
              </div>
            </div>
            <div>
              <img src={sectionData.fourthImg} alt="" />
              <h2>{sectionData.fourthTitle}</h2>
              <p>{sectionData.fourthText}</p>
              <Link href={"/"}>SHOP NOW</Link>
            </div>
          </div>
        )
      ) : (
        ""
      )}
    </>
  );
}
