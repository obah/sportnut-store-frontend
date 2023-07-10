/* eslint-disable @next/next/no-img-element */
import { blogData } from "@/lib/data";
import Link from "next/link";

export default function MiniBlog({ category, categoryId }) {
  const imgStyle = "rounded-md";
  const h2Style = "font-extrabold text-2xl -mb-3";
  const pStyle = "text-sm";
  const btnStyle = "link-btn";
  const boxStyle = "flex flex-col items-center justify-center gap-4 ";

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
            <div className="grid grid-cols-2 gap-10 px-6">
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img
                    src={sectionData.firstImg}
                    alt=""
                    className="rounded-md h-screen"
                  />
                </Link>
                <h2 className={h2Style}>{sectionData.firstTitle}</h2>
                <p className={pStyle}>{sectionData.firstText}</p>
                <Link href={"/pp/" + categoryId} className={btnStyle}>
                  SHOP NOW
                </Link>
              </div>
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img
                    src={sectionData.secondImg}
                    alt=""
                    className="rounded-md h-screen"
                  />
                </Link>
                <h2 className={h2Style}>{sectionData.secondTitle}</h2>
                <p className={pStyle}>{sectionData.secondText}</p>
                <Link href={"/pp/" + categoryId} className={btnStyle}>
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className={boxStyle}>
              <Link href={"/pp/" + categoryId}>
                <img
                  src={sectionData.thirdImg}
                  alt=""
                  className={imgStyle + " mt-20"}
                />
              </Link>
              <h2 className={h2Style}>{sectionData.thirdTitle}</h2>
              <p className={pStyle}>{sectionData.thirdText}</p>
              <Link href={"/pp/" + categoryId} className={btnStyle}>
                SHOP NOW
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-3 px-10 gap-10 mb-10">
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img src={sectionData.firstImg} alt="" className={imgStyle} />
                </Link>
                <h2 className={h2Style}>{sectionData.firstTitle}</h2>
                <p className={pStyle}>{sectionData.firstText}</p>
                <Link href={"/pp/" + categoryId} className={btnStyle}>
                  SHOP NOW
                </Link>
              </div>
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img
                    src={sectionData.secondImg}
                    alt=""
                    className={imgStyle}
                  />
                </Link>
                <h2 className={h2Style}>{sectionData.secondTitle}</h2>
                <p className={pStyle}>{sectionData.secondText}</p>
                <Link href={"/pp/" + categoryId} className={btnStyle}>
                  SHOP NOW
                </Link>
              </div>
              <div className={boxStyle}>
                <Link href={"/pp/" + categoryId}>
                  <img src={sectionData.thirdImg} alt="" className={imgStyle} />
                </Link>
                <h2 className={h2Style}>{sectionData.thirdTitle}</h2>
                <p className={pStyle}>{sectionData.thirdText}</p>
                <Link href={"/pp/" + categoryId} className={btnStyle}>
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className={boxStyle}>
              <Link href={"/pp/" + categoryId}>
                <img
                  src={sectionData.fourthImg}
                  alt=""
                  className={imgStyle + " mt-12"}
                />
              </Link>
              <h2 className={h2Style}>{sectionData.fourthTitle}</h2>
              <p className={pStyle}>{sectionData.fourthText}</p>
              <Link href={"/pp/" + categoryId} className={btnStyle}>
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
