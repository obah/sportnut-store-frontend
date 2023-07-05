/* eslint-disable @next/next/link-passhref */
import Image from "next/image";
import AnnouncementImg from "@/images/announcement.jpg";
import Link from "next/link";

export default function Announcement({ product }) {
  const id = product._id;
  return (
    <div className="big-center h-[500px]">
      <div className="relative mt-8">
        <Link href={"/product/" + id}>
          <Image
            src={AnnouncementImg}
            alt=""
            className="w-full h-[420px] z-0"
          />
        </Link>
        <div className="flex flex-col gap-8 justify-center items-center text-center bg-indigo-950 text-white px-10 w-1/2 h-[450px] absolute top-0 left-0 z-10">
          <h1 className="font-black text-7xl uppercase">
            Stanley Quencher H2.0
          </h1>
          <p className="text-lg">
            The new FlowState Tumbler. Compatible with cup holders. Double-wall
            insulation. Reusable straw. Comfort-grip handle
          </p>
          <Link href={"/product/" + id} className="primary-btn px-28 py-2">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
}
