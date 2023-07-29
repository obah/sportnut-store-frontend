import { BigCenter } from "@/components/viewPorts";

export default function Page() {
  return (
    <BigCenter styles={"bg-primary text-center text-white"}>
      <h1 className="pb-3 pt-20 text-4xl font-semibold lg:pt-40 lg:text-7xl">
        This content is still a work in progress
      </h1>
      <p className=" pb-20 text-xl font-semibold lg:pb-40 lg:text-3xl">
        It will be available very soon, so please check back later
      </p>
    </BigCenter>
  );
}
