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
            className="z-0 h-[420px] w-full"
          />
        </Link>
        <div className="absolute left-0 top-0 z-10 flex h-[450px] w-1/2 flex-col items-center justify-center gap-8 bg-indigo-950 px-10 text-center text-white">
          <h1 className="text-7xl font-black uppercase">
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
