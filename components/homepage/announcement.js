import Image from "next/image";
import AnnouncementImg from "@/images/Announcement.jpg";
import Link from "next/link";
import { BigCenter } from "../viewPorts";

export default function Announcement({ product }) {
  const id = product._id;
  return (
    <BigCenter styles={"h-[575px] md:h-[300px] lg:h-[500px]"}>
      <div className="relative mt-8">
        <Link href={"/product/" + id}>
          <Image
            src={AnnouncementImg}
            alt=""
            className="z-0 h-[300px] w-full object-cover md:h-[270px] lg:h-[420px] "
          />
        </Link>
        <div className="flex h-auto w-full flex-col items-center justify-center gap-4 bg-indigo-950 px-10 py-8 text-center text-white md:absolute md:left-1/4 md:top-0 md:z-10 md:h-[271px] md:w-1/2 lg:left-0 lg:h-[450px] lg:gap-8 lg:py-0 ">
          <h1 className="text-3xl font-bold uppercase lg:text-7xl lg:font-black">
            Stanley Quencher H2.0
          </h1>
          <p className="text-sm lg:text-lg">
            The new FlowState Tumbler. Compatible with cup holders. Double-wall
            insulation. Reusable straw. Comfort-grip handle
          </p>
          <Link
            href={"/product/" + id}
            className="primary-btn px-24 py-2 lg:px-28"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </BigCenter>
  );
}
