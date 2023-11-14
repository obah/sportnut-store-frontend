import { BigCenter } from "@/components/viewPorts";

export default function Page() {
  return (
    <BigCenter styles={"bg-primary text-center text-white"}>
      <h1 className="pb-3 pt-20 text-4xl font-semibold lg:pt-40 lg:text-7xl">
        We are updating some info...
      </h1>
      <p className=" pb-20 text-xl font-semibold lg:pb-40 lg:text-3xl">
        Please check back later
      </p>
    </BigCenter>
  );
}
